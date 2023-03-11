import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { InvoiceListComponent } from './ui/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './ui/invoice-details/invoice-details.component';
import {InvoicesRoutingModule} from "./invoices-routing.module";
import { InvoiceItemComponent } from './ui/invoice-item/invoice-item.component';
import { InvoiceStatusComponent } from './ui/invoice-status/invoice-status.component';
import { InvoiceFormComponent } from './ui/invoice-form/invoice-form.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DateDuePipe } from './pipes/date-due.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { ConfirmationPopupComponent } from './ui/confirmation-popup/confirmation-popup.component';



@NgModule({
  declarations: [
    InvoicesComponent,
    InvoiceListComponent,
    InvoiceDetailsComponent,
    InvoiceItemComponent,
    InvoiceStatusComponent,
    InvoiceFormComponent,
    ClickOutsideDirective,
    DateDuePipe,
    ConfirmationPopupComponent
  ],
    imports: [
        CommonModule,
        InvoicesRoutingModule,
        ReactiveFormsModule
    ]
})
export class InvoicesModule { }
