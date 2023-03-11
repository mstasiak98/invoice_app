import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subject, takeUntil, tap} from "rxjs";
import {log} from "util";
import {InvoiceStore} from "../../invoice.store";

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit, OnDestroy {


  destroy$: Subject<boolean> = new Subject<boolean>();
  invoice$ = this.store.currentInvoice$;
  showPopup$ = this.store.popup$;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$),
      tap((params) =>{
        if(params.has('id')) {
          this.store.setCurrentInvoiceId(+params.get('id')!);
          this.store.loadInvoiceDetails();
        }
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  constructor(private route: ActivatedRoute, private store: InvoiceStore) { }

  openEditSidebar(): void {
    this.store.setSidebarMode('edit');
  }

  changeInvoiceStatus(): void {
    this.store.changeInvoiceStatus();
  }

  togglePopup(): void {
    this.store.toggleConfirmationPopup();
  }


  deleteInvoice(confirmation: boolean): void {
    if(!confirmation) {
      return;
    }

    this.store.removeInvoice();
  }
}
