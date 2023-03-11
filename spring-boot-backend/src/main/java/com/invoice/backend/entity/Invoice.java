package com.invoice.backend.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "invoice")
@Getter
@Setter
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "invoice_number")
    private String invoiceNumber;

    @Column(name = "client_name")
    private String clientName;

    @Column(name = "client_email")
    private String clientEmail;

    @Column(name = "date")
    private String date;

    @Column(name = "description")
    private String description;

    @Column(name = "total")
    private BigDecimal total;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "client_address_id", referencedColumnName = "id")
    private Address clientAddress;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "issuer_address_id", referencedColumnName = "id")
    private Address issuerAddress;

    @ManyToOne
    @JoinColumn(name = "status_id", nullable = false)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "terms_id", nullable = false)
    private PaymentTerm paymentTerm;

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
    private Set<InvoiceItem> invoiceItems = new HashSet<>();

    @Column(name = "created_by")
    private Long createdBy;

    public void add(InvoiceItem invoiceItem) {
        if(invoiceItem != null) {
            if(this.invoiceItems == null) {
                this.invoiceItems = new HashSet<>();
            }
            this.invoiceItems.add(invoiceItem);
            invoiceItem.setInvoice(this);
        }
    }

}
