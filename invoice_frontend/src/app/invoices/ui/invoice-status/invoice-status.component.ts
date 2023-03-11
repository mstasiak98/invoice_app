import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-invoice-status',
  templateUrl: './invoice-status.component.html',
  styleUrls: ['./invoice-status.component.scss']
})
export class InvoiceStatusComponent {
  @Input() status: string;
}
