package com.adolfoeloy.vendetudo.product;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.net.URI;

@RestController
public class ProductsController {

    private final ProductsRepository products;

    public ProductsController(ProductsRepository products) {
        this.products = products;
    }

    @CrossOrigin
    @GetMapping(value = "/products", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Flux<Product> all() {
        return products.findAll();
    }

    @PostMapping(value = "/products")
    public Mono<?> create(@RequestBody Product product) {
        return products.save(product).then(Mono.just(ResponseEntity.created(URI.create("/products/id"))));
    }

}
