package com.invoice.backend.dao;

import com.invoice.backend.entity.PaymentTerm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "terms", path = "payment-terms")
public interface PaymentTermRepository extends JpaRepository<PaymentTerm, Long> {

    Optional<PaymentTerm> findByNameIgnoreCase(String name);
}
