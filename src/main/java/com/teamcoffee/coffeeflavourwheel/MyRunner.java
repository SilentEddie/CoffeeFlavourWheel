//package com.teamcoffee.coffeeflavourwheel;
//
//import com.teamcoffee.coffeeflavourwheel.UserService.TastedCoffeeService;
//import com.teamcoffee.coffeeflavourwheel.model.CoffeeLib;
//import com.teamcoffee.coffeeflavourwheel.model.User;
//import com.teamcoffee.coffeeflavourwheel.repository.CoffeeLibRepository;
//import com.teamcoffee.coffeeflavourwheel.repository.UserRepository;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import javax.transaction.Transactional;
//
//@Component
//public class MyRunner implements CommandLineRunner {
//
//    private static final Logger logger = LoggerFactory.getLogger(MyRunner.class);
//
//    @Autowired
//    private CoffeeLibRepository tastedCoffeeRepository;
//
//    @Override
//    @Transactional
//    public void run(String... args) throws Exception {
//
//        logger.info("initializing users");
//
//        var u1 = new CoffeeLib("coffeeA", "JDE", "dark", "washed", "espresso", "Arabica");
//        tastedCoffeeRepository.save(u1);
//
//        var u2 = new CoffeeLib("coffeeB", "S&D", "medium/dark", "washed", "espresso", "Arabica");
//        tastedCoffeeRepository.save(u2);
//
//        var u3 = new CoffeeLib("coffeeC", "Stooker", "light", "pulp natural", "filter", "Aribica");
//        tastedCoffeeRepository.save(u3);
//    }
//}