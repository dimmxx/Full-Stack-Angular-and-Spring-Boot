package com.example.springecommerce.config;

import com.example.springecommerce.domain.Product;
import com.example.springecommerce.domain.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    private final EntityManager em;

    public DataRestConfig(EntityManager em) {
        this.em = em;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] theUnsupportedActions = {HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};

        //disable HTTP methods for Product: POST, PUT, DELETE
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)));

        //disable HTTP methods for ProductCategory: POST, PUT, DELETE
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)));

//        // simple way: setting manually for every class
//        config.exposeIdsFor(Product.class);
//        config.exposeIdsFor(ProductCategory.class);

        // complex way: automatically for all the entities
        exposeAllEntitiesIds(config);
    }

    private void exposeAllEntitiesIds(RepositoryRestConfiguration config) {
        // - gets a list of all entity classes from the em
        List<EntityType<?>> entityTypes = new ArrayList<>(em.getMetamodel().getEntities());
        Class<?>[] classes = new Class[entityTypes.size()];
        for (int i = 0; i < classes.length; i++) {
            classes[i] = entityTypes.get(i).getJavaType();
        }
        config.exposeIdsFor(classes);
    }
}
