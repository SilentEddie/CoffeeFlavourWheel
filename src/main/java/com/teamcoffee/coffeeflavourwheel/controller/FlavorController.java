package com.teamcoffee.coffeeflavourwheel.controller;

import com.teamcoffee.coffeeflavourwheel.model.Flavor;
import com.teamcoffee.coffeeflavourwheel.repository.FlavorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class FlavorController {

    @Autowired
    private FlavorRepository repository;


    @GetMapping("/flavor")
    public List<Flavor> allFlavors() {
           return (List<Flavor>) repository.findAll();
     }

    @GetMapping(path = {"/flavor/{id}"})
    public ResponseEntity<Flavor> findById(@PathVariable int id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }
}