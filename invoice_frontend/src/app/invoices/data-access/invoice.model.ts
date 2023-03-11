export interface Invoice {
  id: number;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  date: string;
  clientAddress: Address;
  issuerAddress: Address;
  invoiceItems: InvoiceItem[];
  status: Status;
  paymentTerm: PaymentTerm;
  description: string;
  total: number;
}

export interface InvoiceItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface Address {
  id: number;
  country: string;
  city: string;
  street: string;
  postCode: string;
}

export interface Status {
  id: number;
  name: string;
}

export interface PaymentTerm {
  id: number;
  name: Terms;
}

export enum Terms {
  PIA = 'PIA',
  NET7 = 'NET7',
  NET10 = 'NET10',
  NET15 = 'NET15',
  NET30 = 'NET30',
  NET60 = 'NET60',
  EOM = 'EOM',
  COD = 'COD',
  CIA = 'CIA'
}

export interface InvoiceDto {
  clientAddress: Address;
  issuerAddress: Address;
  status: number;
  paymentTerm: string;
  invoiceItems: {name: string; quantity: number; price: number};
  invoice: {
    id?: number;
    clientName: string;
    clientEmail: string;
    date: string;
    description: string;
  }
}

export enum SaveType {
  DRAFT = 1,
  PENDING = 2
}
