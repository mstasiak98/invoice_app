package com.invoice.backend.dao;

import com.invoice.backend.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    Optional<Address> findFirstByCountryAndCityAndPostCodeAndStreet(String country, String city, String postCode, String street);
}
