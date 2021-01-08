package com.example.springecommerce.repository;

import com.example.springecommerce.domain.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(path = "product-categories", collectionResourceRel = "productCategory")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
