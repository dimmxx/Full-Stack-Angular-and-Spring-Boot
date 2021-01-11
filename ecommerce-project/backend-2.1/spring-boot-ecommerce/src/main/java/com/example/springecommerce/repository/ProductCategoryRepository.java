package com.example.springecommerce.repository;

import com.example.springecommerce.domain.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@RepositoryRestResource(path = "product-category", collectionResourceRel = "productCategory")
@CrossOrigin("http://localhost:4200")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
