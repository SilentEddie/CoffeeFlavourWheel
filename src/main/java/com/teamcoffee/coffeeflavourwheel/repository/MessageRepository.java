package com.teamcoffee.coffeeflavourwheel.repository;

import com.teamcoffee.coffeeflavourwheel.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Integer> {

}