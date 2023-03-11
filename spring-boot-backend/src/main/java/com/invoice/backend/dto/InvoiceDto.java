package com.invoice.backend.dto;

import com.invoice.backend.entity.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class InvoiceDto {
    @NotNull
    private Address clientAddress;
    @NotNull
    private Address issuerAddress;
    @NotNull
    private String paymentTerm;
    @NotNull
    private Invoice invoice;
    @NotNull
    private List<InvoiceItem> invoiceItems;
    @NotNull
    @Min(1)
    @Max(2)
    private long status;
}
