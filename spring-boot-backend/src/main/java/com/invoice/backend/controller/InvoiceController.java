package com.invoice.backend.controller;

import com.invoice.backend.dto.InvoiceDto;
import com.invoice.backend.dto.InvoiceResponse;
import com.invoice.backend.entity.Invoice;
import com.invoice.backend.service.InvoiceService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/invoice")

public class InvoiceController {

    private InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @GetMapping("/list")
    public Page<Invoice> getInvoices(Pageable pageable) {
        return this.invoiceService.getInvoices(pageable);
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<Invoice> getDetails(@PathVariable Long id) {
        Invoice invoice = this.invoiceService.getInvoiceDetails(id);
        if(invoice != null)
            return new ResponseEntity<>(invoice, HttpStatus.OK);
        else
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<InvoiceResponse> createInvoice(@Valid @RequestBody InvoiceDto invoiceData) {
        return this.invoiceService.createInvoice(invoiceData);
    }

    @DeleteMapping("/{id}/remove")
    public boolean removeInvoice(@PathVariable Long id) {
        return this.invoiceService.deleteInvoice(id);
    }

    @PatchMapping("/{id}/change-status")
    public ResponseEntity<InvoiceResponse> changeStatus(@PathVariable Long id) {
        Invoice response = this.invoiceService.changeInvoiceStatus(id);
        return new ResponseEntity<>(new InvoiceResponse(response), response == null ? HttpStatus.BAD_REQUEST : HttpStatus.OK);
    }

}
