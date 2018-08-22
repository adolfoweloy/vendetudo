package com.adolfoeloy.vendetudo.product;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Data
@Document
public class Product {

    @Id
    private BigInteger id;
    private String title;
    private String description;
    private double price;
    private String image;

}
