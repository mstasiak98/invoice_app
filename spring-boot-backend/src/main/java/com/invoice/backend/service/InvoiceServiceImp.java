package com.invoice.backend.service;

import com.invoice.backend.dao.InvoiceItemRepository;
import com.invoice.backend.dao.InvoiceRepository;
import com.invoice.backend.dao.PaymentTermRepository;
import com.invoice.backend.dao.StatusRepository;
import com.invoice.backend.dto.InvoiceDto;
import com.invoice.backend.dto.InvoiceResponse;
import com.invoice.backend.entity.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashSet;

@Service
public class InvoiceServiceImp implements InvoiceService{

    @Autowired
    InvoiceRepository invoiceRepository;

    @Autowired
    InvoiceItemRepository invoiceItemRepository;

    @Autowired
    StatusRepository statusRepository;

    @Autowired
    AddressService addressService;

    @Autowired
    PaymentTermRepository termRepository;

    @Override
    public Page<Invoice> getInvoices(Pageable pageable) {
        return invoiceRepository.findAll(pageable);
    }

    @Override
    public Invoice getInvoiceDetails(long id) {
        return this.invoiceRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public ResponseEntity<InvoiceResponse> createInvoice(InvoiceDto invoiceDto) {

        // prepare payment term
        PaymentTerm paymentTerm = this.termRepository.findByNameIgnoreCase(invoiceDto.getPaymentTerm()).orElse(null);
        if(paymentTerm == null) return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        //Save with pending or draft
        Status status;
        if(invoiceDto.getStatus() == 1)
            status  = statusRepository.findById((long)1).orElse(null);
        else
            status = statusRepository.findById((long)2).orElse(null);

        //Check for existing address
        Address issuer = addressService.findByAddressData(invoiceDto.getIssuerAddress());
        Address client = addressService.findByAddressData(invoiceDto.getClientAddress());

        Invoice invoice = invoiceDto.getInvoice();

        //Check if edit or new invoice
        if(invoice.getId() != null) {
            invoice = invoiceRepository.findById(invoiceDto.getInvoice().getId()).orElse(invoiceDto.getInvoice());
            //assign new values and delete previous invoice items
            invoice.setClientName(invoiceDto.getInvoice().getClientName());
            invoice.setClientEmail(invoiceDto.getInvoice().getClientEmail());
            invoice.setDate(invoiceDto.getInvoice().getDate());
            invoice.setDescription(invoiceDto.getInvoice().getDescription());

            // remove and detach previous invoice items
            this.removeInvoiceItemsFromInvoice(invoice);
            invoice.setInvoiceItems(new HashSet<>());

        }else {
            //create new invoice number when adding invoice
            String invoiceNumber = this.generateInvoiceNumber();
            invoice.setInvoiceNumber(invoiceNumber);
        }

        //Populate new invoice items
        BigDecimal total = new BigDecimal(0);
        for(InvoiceItem invItem : invoiceDto.getInvoiceItems()) {
            invItem.setTotalPrice(invItem.getPrice().multiply(new BigDecimal(invItem.getQuantity())));
            invoice.add(invItem);
            total = total.add(invItem.getTotalPrice());
        }

        invoice.setTotal(total);
        invoice.setClientAddress(client);
        invoice.setIssuerAddress(issuer);
        invoice.setStatus(status);
        invoice.setPaymentTerm(paymentTerm);
        //TODO change to user id if auth added
        invoice.setCreatedBy((long) 1);

        Invoice savedInvoice = this.invoiceRepository.save(invoice);

        return new ResponseEntity<>(new InvoiceResponse(savedInvoice), HttpStatus.CREATED);
    }

    @Override
    public boolean deleteInvoice(long invoiceId) {
        try {
            Invoice invoice = this.invoiceRepository.findById(invoiceId).orElse(null);
            if(invoice == null) {
                return false;
            }
            // Detach addresses so it won't cascade delete
            invoice.setIssuerAddress(null);
            invoice.setClientAddress(null);

            this.invoiceRepository.delete(invoice);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Transactional
    public Invoice changeInvoiceStatus(long invoiceId) {
        Invoice invoice = invoiceRepository.findById(invoiceId).orElse(null);
        Status pending = statusRepository.findByName("Pending").get();
        Status paid = statusRepository.findByName("Paid").get();
        if(invoice == null) return null;

        if(invoice.getStatus().getName().equals("Pending")) {
            invoice.setStatus(paid);
        } else {
            invoice.setStatus(pending);
        }
        invoiceRepository.save(invoice);
        return invoice;
    }

    private String generateInvoiceNumber() { return "210001"; }

    private void removeInvoiceItemsFromInvoice(Invoice invoice) {
        invoice.getInvoiceItems().forEach(item -> invoiceItemRepository.deleteById(item.getId()));
    }
}
