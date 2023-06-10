package com.itg.backend.service;

import com.itg.backend.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAll();

    Product findById(int theId);

    Product save(Product theProduct);

    void deleteById(int theId);

}
