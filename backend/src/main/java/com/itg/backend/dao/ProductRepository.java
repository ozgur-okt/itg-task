package com.itg.backend.dao;

import com.itg.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {



}
