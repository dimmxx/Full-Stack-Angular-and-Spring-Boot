package com.example.springecommerce.repository;

import com.example.springecommerce.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(path = "products")
public interface ProductRepository extends JpaRepository <Product, Long>{
}
