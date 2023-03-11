import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Invoice, InvoiceDto} from "./invoice.model";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }


  public removeInvoice(invoiceId: number): Observable<boolean> {
    const url = `${this.API_URL}/invoice/${invoiceId}/remove`;
    return this.http.delete<boolean>(url);
  }

  public changeInvoiceStatus(invoiceId: number): Observable<{ invoice: Invoice }> {
    const url = `${this.API_URL}/invoice/${invoiceId}/change-status`;
    return this.http.patch<{ invoice: Invoice }>(url, null);
  }

  public createInvoice(invoiceDto: InvoiceDto): Observable<{ invoice: Invoice }> {
    const url = `${this.API_URL}/invoice/create`;
    return this.http.post<{ invoice: Invoice }>(url, invoiceDto);
  }

  public getInvoiceDetails(id: number): Observable<Invoice> {
    const url = `${this.API_URL}/invoice/${id}/details`;
    return this.http.get<Invoice>(url);
  }

  public getInvoiceList(page: number = 0): Observable<GetInvoicesResponse> {
    const url = `${this.API_URL}/invoice/list`;
    return this.http.get<GetInvoicesResponse>(url, {
      params: {
        page: page
      }
    });
  }

}

export  interface GetInvoicesResponse {
  content: Invoice[];
  totalPages: number;
  totalElements: number;
  size: number;
}
