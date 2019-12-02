package com.teamcoffee.coffeeflavourwheel.UserService;

import com.teamcoffee.coffeeflavourwheel.repository.FlavorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlavorService {

    @Autowired
    private FlavorRepository flavorRepository;
}
