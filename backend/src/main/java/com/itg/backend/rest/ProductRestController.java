package com.itg.backend.rest;

import com.itg.backend.entity.Product;
import com.itg.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class ProductRestController {

    private ProductService productService;

    @Autowired
    public ProductRestController(ProductService theProductService) {
        productService = theProductService;
    }
    @GetMapping("/products")
    public List<Product> findAll() {
        return productService.findAll();
    }
    @GetMapping("/products/{productId}")
    public Product getProduct(@PathVariable int productId) {

        Product theProduct = productService.findById(productId);

        if (theProduct == null) {
            throw new RuntimeException("Product id not found - " + productId);
        }

        return theProduct;
    }
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product theProduct) {
        theProduct.setId(0);
        Product dbProduct = productService.save(theProduct);
        return dbProduct;
    }
    @PutMapping("/products")
    public Product updateProduct(@RequestBody Product theProduct) {

        Product dbProduct = productService.save(theProduct);
        return dbProduct;
    }
    @DeleteMapping("/products/{productId}")
    public String deleteProduct(@PathVariable int productId) {

        Product tempProduct = productService.findById(productId);
        if (tempProduct == null) {
            throw new RuntimeException("Product id not found - " + productId);
        }
        productService.deleteById(productId);
        return "Deleted product id - " + productId;
    }

}














