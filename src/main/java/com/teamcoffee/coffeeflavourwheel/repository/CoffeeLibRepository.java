package com.teamcoffee.coffeeflavourwheel.repository;

import com.teamcoffee.coffeeflavourwheel.model.CoffeeLib;
import com.teamcoffee.coffeeflavourwheel.model.DBFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Objects;
import java.util.Optional;

public interface CoffeeLibRepository extends JpaRepository<CoffeeLib, Long> {
//    static Object save(DBFile dbFile) {
//        return dbFile;
//    }
}
