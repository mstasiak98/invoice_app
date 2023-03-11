package com.invoice.backend.service;

import com.invoice.backend.dao.AddressRepository;
import com.invoice.backend.entity.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    AddressRepository addressRepository;

    public Address findByAddressData(Address newAddressData) {
        return addressRepository.findFirstByCountryAndCityAndPostCodeAndStreet(
                newAddressData.getCountry(),
                newAddressData.getCity(),
                newAddressData.getPostCode(),
                newAddressData.getStreet()
        ).orElse(newAddressData);
    }

}
