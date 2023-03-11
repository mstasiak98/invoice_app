package com.invoice.backend.dao;

import com.invoice.backend.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "status", path = "status")
public interface StatusRepository extends JpaRepository<Status, Long> {

    public Optional<Status> findByName(String name);
}
