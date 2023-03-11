import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoicesComponent} from "./invoices.component";
import {InvoiceListComponent} from "./ui/invoice-list/invoice-list.component";
import {InvoiceDetailsComponent} from "./ui/invoice-details/invoice-details.component";

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    children: [
      {
        path: '',
        component: InvoiceListComponent
      },
      {
        path: 'details/:id',
        component: InvoiceDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
