package com.adolfoeloy.vendetudo.product;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import java.math.BigInteger;

public interface ProductsRepository extends ReactiveCrudRepository<Product, BigInteger> {
}
