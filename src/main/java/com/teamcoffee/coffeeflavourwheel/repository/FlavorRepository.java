package com.teamcoffee.coffeeflavourwheel.repository;

import com.teamcoffee.coffeeflavourwheel.model.Flavor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorRepository extends JpaRepository<Flavor, Integer> {
}
