import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {Invoice, InvoiceDto} from "./data-access/invoice.model";
import {Injectable} from "@angular/core";
import {map, Observable, of, switchMap, tap, withLatestFrom} from "rxjs";
import {GetInvoicesResponse, InvoiceService} from "./data-access/invoice.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

export type State = 'pending' | 'loading' | 'success' | 'error';

export interface InvoiceState {
  invoices: Invoice[];
  page: number,
  totalPages: number,
  loadingState: State;
  totalElements: number;
  error: string | null;
  currentInvoiceId: number | null;
  currentInvoice: Invoice | null;
  sidebarOpen: 'closed' | 'open';
  sidebarMode: 'edit' | 'create';
  showPopup: boolean
}

const defaultState: InvoiceState = {
  invoices: [],
  page: 1,
  totalPages: 1,
  loadingState: 'pending',
  error: null,
  currentInvoiceId: null,
  currentInvoice: null,
  sidebarOpen: 'closed',
  sidebarMode: 'create',
  totalElements: 0,
  showPopup: false,
}

@Injectable()
export class InvoiceStore extends ComponentStore<InvoiceState> {
  constructor(private invoiceService: InvoiceService, private router: Router) {
    super(defaultState);
  }

  // SELECTORS
  readonly invoices$ = this.select((state) => state.invoices);
  readonly loadingState$ = this.select((state) => state.loadingState);
  readonly totalPages$ = this.select((state) => state.totalPages);
  readonly totalElements$ = this.select((state) => state.totalElements);
  readonly currentPage$ = this.select((state) => state.page);
  readonly currentInvoice$ = this.select((state) => state.currentInvoice);
  readonly sidebarOpen$ = this.select((state) => state.sidebarOpen);
  readonly sidebarMode$ = this.select((state) => state.sidebarMode);
  readonly popup$ = this.select((state) => state.showPopup);

  // UPDATERS
  readonly updateLoadingState = this.updater((state: InvoiceState, loadingState: State) => ({
    ...state, loadingState: loadingState, error: null
  }))

  readonly updateInvoiceList = this.updater((state, invoices: Invoice[]) => ({
    ...state, invoices: invoices, loadingState: 'success'
  }))

  readonly updateTotalPages = this.updater((state, totalPages: number) => ({
    ...state, totalPages: totalPages
  }))

  readonly updateTotalElements = this.updater((state, totalElements: number) => ({
    ...state, totalElements: totalElements
  }))

  readonly updatePage = this.updater((state, page: number) => ({
    ...state, page: page
  }))

  readonly setCurrentInvoiceId = this.updater((state, id: number) => ({
    ...state, currentInvoiceId: id
  }))

  readonly setCurrentInvoice = this.updater((state, invoice: Invoice) => ({
    ...state, currentInvoice: invoice
  }))

  readonly setErrorMessage = this.updater((state, message: string) => ({
    ...state, error: message
  }))

  readonly setSidebarState = this.updater((state, sidebarState: 'closed' | 'open') => ({
    ...state, sidebarOpen: sidebarState, sidebarMode: 'create'
  }))

  readonly setSidebarMode = this.updater((state, sidebarMode: 'edit' | 'create') => ({
    ...state, sidebarMode: sidebarMode, sidebarOpen: "open"
  }))

  readonly addInvoice = this.updater((state, invoice: Invoice) => ({
      ...state, invoices: [...state.invoices, invoice]
  }))

  readonly updateInvoice = this.updater((state, invoice: Invoice) => ({
    ...state, invoices: [...state.invoices.map(x => x.id === invoice.id ? invoice : x)], currentInvoice: invoice
  }))

  readonly deleteInvoice = this.updater((state, invoiceId: number) => ({
    ...state, invoices: [...state.invoices.filter(x => x.id !== invoiceId)]
  }))

  readonly toggleConfirmationPopup = this.updater((state) => ({
    ...state, showPopup: !state.showPopup
  }))

  // EFFECTS

  readonly removeInvoice = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      withLatestFrom(this.select((state) => state )),
      map(([, state]) => state),
      switchMap(({currentInvoiceId}) => {
        if(!currentInvoiceId) return of(null);

        return this.invoiceService.removeInvoice(currentInvoiceId).pipe(
          tapResponse(
            (resp) => {
              this.updateLoadingState('success');
              this.deleteInvoice(currentInvoiceId);
              this.router.navigate(['']);
            },

            (error: HttpErrorResponse) => {
              this.setErrorMessage(error.message);
            }
          )
        )
      })
    )
  })

  readonly changeInvoiceStatus = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      withLatestFrom(this.select((state) => state )),
      map(([, state]) => state),
      switchMap(({currentInvoiceId}) => {
        if(!currentInvoiceId) return of(null)

        this.updateLoadingState('loading');
        return this.invoiceService.changeInvoiceStatus(currentInvoiceId).pipe(
          tapResponse(
            (resp) => {
              this.updateLoadingState('success');
              this.updateInvoice(resp.invoice);
            },
            (error: HttpErrorResponse) => {
              this.setErrorMessage(error.message);
            }
          )
        )
      })
    )
  })

  readonly saveInvoice = this.effect((trigger$: Observable<InvoiceDto>) => {
    return trigger$.pipe(
      switchMap((invoice: InvoiceDto) => {
        this.updateLoadingState('loading');
        return this.invoiceService.createInvoice(invoice).pipe(
          tapResponse(
            (resp) => {
              this.setCurrentInvoice(resp.invoice);
              this.updateLoadingState('success');
              this.setSidebarState('closed');
              this.addInvoice(resp.invoice);
              this.router.navigate(['/details', resp.invoice.id])
            },
            (error: HttpErrorResponse) => {
              this.setErrorMessage(error.message);
            }
          )
        )
      })
    )
  })

  readonly loadInvoiceDetails = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      withLatestFrom(this.select((state) => state )),
      map(([, state]) => state),
      switchMap(({invoices, currentInvoiceId}) => {
        if(!currentInvoiceId) return of(null);
        const inv = invoices.find(x => x.id === currentInvoiceId);
        if(inv){
          return of(this.setCurrentInvoice(inv));
        }else {
          return this.invoiceService.getInvoiceDetails(currentInvoiceId).pipe(
            tapResponse(
              (resp) => {
                this.setCurrentInvoice(resp);
              },
              (error: HttpErrorResponse) => {
                this.setErrorMessage(error.message);
                this.router.navigate(['']);
              }
            )
          )
        }
      })
    )
  })

  readonly loadInvoices = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      withLatestFrom(this.select((state) => state )),
      map(([, state]) => state),
      switchMap(({ page }) => {
        return this.invoiceService.getInvoiceList(page - 1).pipe(
          tapResponse(
            (resp: GetInvoicesResponse) => {
              this.updateInvoiceList(resp.content);
              this.updateTotalPages(resp.totalPages);
              this.updateTotalElements(resp.totalElements);
            },
            (error) => {
              this.updateLoadingState('error')
            }
          )
        )
      })
    )
  })

  readonly loadNextPage = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      withLatestFrom(this.select((state) => state )),
      map(([, state]) => state),
      tap(({page, totalPages}) => {
        if(page + 1 <= totalPages )
          this.updatePage(page + 1)
      }),
      tap(() => this.loadInvoices())
    );
  })

  readonly loadPreviousPage = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      withLatestFrom(this.select((state) => state.page )),
      map(([, state]) => state),
      tap((page) => {
        if(page -1 >= 1)
          this.updatePage(page - 1)
      }),
      tap(() => this.loadInvoices())
    );
  })
}

