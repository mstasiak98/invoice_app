package com.invoice.backend.dto;

import lombok.Data;
import com.invoice.backend.entity.*;

@Data
public class InvoiceResponse {
    private Invoice invoice;

    public InvoiceResponse(Invoice invoice) {
        this.invoice = invoice;
    }
}
