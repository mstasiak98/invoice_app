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
      case Terms.NET7: return this.datePipe.transform(new Date(invDate.getDate() + 7), 'mediumDate')!;
      case Terms.NET10: return this.datePipe.transform(new Date(invDate.getDate() + 10), 'mediumDate')!;
      case Terms.NET15: return this.datePipe.transform(new Date(invDate.getDate() + 15), 'mediumDate')!;
      case Terms.NET30: return this.datePipe.transform(new Date(invDate.getDate() + 30), 'mediumDate')!;
      case Terms.NET60: return this.datePipe.transform(new Date(invDate.getDate() + 60), 'mediumDate')!;
      default: return 'Not defined'
    }

  }

}
