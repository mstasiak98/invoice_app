import {Component, Input, OnInit} from '@angular/core';
import {InvoiceStore} from "../../invoice.store";
import {Form, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Invoice, InvoiceDto, SaveType, Terms} from "../../data-access/invoice.model";

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup;
  terms: string[];

  @Input() sidebarMode: 'edit' | 'create';
  @Input() invoice?: Invoice | null;

  constructor(private store: InvoiceStore, private formBuilder: FormBuilder) {
    this.setTerms();
  }

  ngOnInit(): void {
    this.invoiceForm = this.formBuilder.group({
      issuerAddress: this.formBuilder.group({
        street: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]],
        city: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]],
        postCode: ['', [Validators.required]],
        country: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]],
      }),
      clientAddress: this.formBuilder.group({
        street: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]],
        city: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]],
        postCode: ['', [Validators.required]],
        country: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]],
      }),
      paymentTerm: [null, Validators.required],
      status: [2, Validators.required],
      invoice: this.formBuilder.group({
        clientName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]],
        clientEmail: ['', [Validators.required, Validators.email]],
        date: ['', Validators.required],
        description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(254)]]
      }),
      invoiceItems: this.formBuilder.array([], Validators.required)
    });

    if(this.sidebarMode === 'edit' && this.invoice) {
      this.invoiceForm.patchValue({
        issuerAddress: this.invoice.issuerAddress,
        clientAddress: this.invoice.clientAddress,
        paymentTerm: this.invoice.paymentTerm.name,
        invoice: {
          clientName: this.invoice.clientName,
          clientEmail: this.invoice.clientEmail,
          description: this.invoice.description,
          date: this.invoice.date
        },
      });
      this.invoice.invoiceItems.forEach(item => {
        this.addInvoiceItem(item.name, item.quantity, item.price);
      })
    }
  }

  invoiceItemsControls(): FormArray {
    return this.invoiceForm.get('invoiceItems') as FormArray;
  }

  addInvoiceItem(name:string = '', qty: number = 1, price: number | null = null): void {
    const controls = this.invoiceItemsControls();
    controls.push(this.createInvoiceItem(name, qty, price));
  }

  deleteInvoiceItem(idx: number): void {
    const controls = this.invoiceItemsControls();
    controls.removeAt(idx);
  }

  private createInvoiceItem(name: string, quantity: number, price: number | null): FormGroup {
    return this.formBuilder.group({
      name: [name, Validators.required],
      quantity: [quantity, [Validators.required, Validators.min(1), Validators.pattern(/^\d+\.?\d*$/)]],
      price: [price, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    })
  }

  closeSidebar(): void {
    this.store.setSidebarState('closed');
  }

  private setTerms(): void {
    this.terms = (Object.keys(Terms) as Array<keyof typeof Terms>).filter(
      key => isNaN(+key));
  }

  submitForm(type: SaveType) {
    if(this.invoiceForm.invalid) {
      this.invoiceForm.markAllAsTouched();
    }
    let invoiceDto: InvoiceDto = this.invoiceForm.value;

    // Set id if edit mode
    if(this.sidebarMode === 'edit' && this.invoice) {
      invoiceDto.invoice.id = this.invoice.id;
    }

    //Save type
    invoiceDto.status = type;
    this.store.saveInvoice(invoiceDto);
  }

  get clientAddress() { return (this.invoiceForm.get('clientAddress') as FormGroup).controls;}
  get issuerAddress() { return (this.invoiceForm.get('issuerAddress') as FormGroup).controls; }
  get invoiceData() { return (this.invoiceForm.get('invoice') as FormGroup).controls; }
  get f() { return this.invoiceForm.controls; }
  invoiceItems(idx: number) { return (this.invoiceForm.get('invoiceItems') as FormArray).controls[idx] ; }
}
