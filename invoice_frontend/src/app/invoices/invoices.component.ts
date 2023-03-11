import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {InvoiceService} from "./data-access/invoice.service";
import {InvoiceStore} from "./invoice.store";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
  providers: [
    InvoiceStore
  ]
})
export class InvoicesComponent implements OnInit, OnDestroy {
  sidebarOpen$ = this.store.sidebarOpen$;
  sidebarMode$ = this.store.sidebarMode$;
  editInvoice$ = this.store.currentInvoice$;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(@Inject(DOCUMENT) private document: Document, private store: InvoiceStore) { }

  ngOnInit(): void {
    this.sidebarOpen$.pipe(
      takeUntil(this.destroy$),
      tap(state => this.toggleBodyOverflow(state))
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleBodyOverflow(state: 'closed' | 'open'): void {
    if(state === 'open') {
       document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    console.log('test');
  }

}
