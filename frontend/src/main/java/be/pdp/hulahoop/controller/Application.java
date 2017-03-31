package be.pdp.hulahoop.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by peterdp on 31/03/2017.
 */
@SpringBootApplication
@EnableAutoConfiguration
@EnableJpaRepositories("be.pdp.hulahoop.dao")
@ComponentScan("be.pdp.hulahoop")
public class Application extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}

