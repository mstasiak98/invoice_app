import { Component, OnInit } from '@angular/core';
import {InvoiceStore} from "../../invoice.store";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices$ = this.store.invoices$;
  currentPage$ = this.store.currentPage$;
  totalPages$ = this.store.totalPages$;
  totalElements$ = this.store.totalElements$;

  constructor(private store: InvoiceStore) { }

  ngOnInit(): void {
    this.store.loadInvoices();
  }

  loadPrevious(): void {
    this.store.loadPreviousPage();
  }

  loadNext(): void {
    this.store.loadNextPage();
  }

  openSidebar():void {
    this.store.setSidebarMode('create');
  }
}
