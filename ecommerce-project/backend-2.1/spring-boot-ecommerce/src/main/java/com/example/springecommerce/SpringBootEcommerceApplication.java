package com.example.springecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootEcommerceApplication {

	public static void main(String[] args) {

		System.setProperty("tomcat.util.http.parser.HttpParser.requestTargetAllow", "{}");

		SpringApplication.run(SpringBootEcommerceApplication.class, args);
	}

}
