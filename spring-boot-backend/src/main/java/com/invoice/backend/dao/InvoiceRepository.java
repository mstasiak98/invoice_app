package com.invoice.backend.dao;

import com.invoice.backend.entity.Invoice;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "invoices", path = "invoices")
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    Page<Invoice> findAll(Pageable pageable);


    @Query(value = "SELECT COUNT(*) as count from invoice WHERE year(date) = :date GROUP BY year(date)", nativeQuery = true)
    Optional<Integer> getInvoiceCountByYear(@Param(value = "date") @NotNull String date);
}
