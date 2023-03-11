import { Pipe, PipeTransform } from '@angular/core';
import {PaymentTerm, Terms} from "../data-access/invoice.model";
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'dateDue'
})
export class DateDuePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }


  transform(value: PaymentTerm, date: string): Date | string {
    const invDate = new Date(date);

    switch (value.name) {
      case Terms.PIA: return Terms.PIA;
      case Terms.CIA: return Terms.CIA;
      case Terms.COD: return Terms.COD;
      case Terms.EOM: return this.datePipe.transform(new Date(invDate.getFullYear(), invDate.getMonth() + 1, 0), 'mediumDate')!;
      case Terms.NET7: return this.datePipe.transform(DateDuePipe.getPaymentDate(invDate, 7), 'mediumDate')!;
      case Terms.NET10: return this.datePipe.transform(DateDuePipe.getPaymentDate(invDate, 10), 'mediumDate')!;
      case Terms.NET15: return this.datePipe.transform(DateDuePipe.getPaymentDate(invDate, 15), 'mediumDate')!;
      case Terms.NET30: return this.datePipe.transform(DateDuePipe.getPaymentDate(invDate, 30), 'mediumDate')!;
      case Terms.NET60: return this.datePipe.transform(DateDuePipe.getPaymentDate(invDate, 60), 'mediumDate')!;
      default: return 'Not defined'
    }
  }

  private static getPaymentDate(date: Date, offset: number): Date {
    return new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate() + offset}`)
  }

}
