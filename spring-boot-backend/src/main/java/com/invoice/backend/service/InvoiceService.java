package com.invoice.backend.service;

import com.invoice.backend.dto.InvoiceDto;
import com.invoice.backend.dto.InvoiceResponse;
import com.invoice.backend.entity.Invoice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface InvoiceService {
    public ResponseEntity<InvoiceResponse> createInvoice(InvoiceDto invoiceDto);
    public Invoice getInvoiceDetails(long id);
    public boolean deleteInvoice(long invoiceId);
    public Invoice changeInvoiceStatus(long invoiceId);
    public Page<Invoice> getInvoices(Pageable pageable);

}
