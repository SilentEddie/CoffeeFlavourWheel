package com.teamcoffee.coffeeflavourwheel.UserService;

import com.teamcoffee.coffeeflavourwheel.model.CoffeeLib;
import com.teamcoffee.coffeeflavourwheel.repository.CoffeeLibRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class TastedCoffeeService {

    @Autowired
    private CoffeeLibRepository coffeeLibRepository;

    public List<CoffeeLib> findAll() {
        var it = coffeeLibRepository.findAll();

        var tastedcoffees = new ArrayList<CoffeeLib>();
        it.forEach(e -> tastedcoffees.add(e));

        return tastedcoffees;
    }

    public Long count() {
        return coffeeLibRepository.count();
    }

    public void deleteById(Long tastedCoffeeId) {
        coffeeLibRepository.deleteById(tastedCoffeeId);
    }
}
