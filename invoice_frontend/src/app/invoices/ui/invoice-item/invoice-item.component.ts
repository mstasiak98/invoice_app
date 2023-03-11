import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from "../../data-access/invoice.model";

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent  {
  @Input() invoice: Invoice;
}
