package com.teamcoffee.coffeeflavourwheel.controller;

import com.teamcoffee.coffeeflavourwheel.model.CoffeeLib;
import com.teamcoffee.coffeeflavourwheel.repository.CoffeeLibRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CoffeeLibController {

    @Autowired
    private CoffeeLibRepository repository;

    @GetMapping("/coffeelib")
    public List<CoffeeLib> allTastedCoffee() {
        return (List<CoffeeLib>) repository.findAll();
    }

    @GetMapping(path = {"/coffeelib/{id}"})
    public ResponseEntity<CoffeeLib> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("coffeelib/count")
    public Long count() {
        return repository.count();
    }

    @PostMapping(value = "/coffeelib/posts" )
    public CoffeeLib create(@RequestBody CoffeeLib coffeeLib) {
        return repository.save(coffeeLib);
    }

    @PutMapping(value = "/coffeelib/{id}")
    public ResponseEntity<CoffeeLib> update(@PathVariable("id") long id, @RequestBody CoffeeLib coffeeLib) {
        return repository.findById(id).map(record -> {
            record.setDate(coffeeLib.getDate());
            record.setCoffeeName(coffeeLib.getCoffeeName());
            record.setRoaster(coffeeLib.getRoaster());
            record.setRoastColor(coffeeLib.getRoastColor());
            record.setProcessingMethod(coffeeLib.getProcessingMethod());
            record.setTastingMethod(coffeeLib.getTastingMethod());
            record.setBeanType(coffeeLib.getBeanType());
            record.setUserNotes(coffeeLib.getUserNotes());
//            record.setFlavors(coffeeLib.getFlavors());
            CoffeeLib updated = repository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("coffeelib/{id}")
    public void delete(@PathVariable String id) {
        Long tastedCoffeeId = Long.parseLong(id);
        repository.deleteById(tastedCoffeeId);
    }
}
