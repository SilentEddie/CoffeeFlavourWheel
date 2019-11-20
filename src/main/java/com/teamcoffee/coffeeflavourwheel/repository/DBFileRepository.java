package com.teamcoffee.coffeeflavourwheel.repository;

import com.teamcoffee.coffeeflavourwheel.model.DBFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DBFileRepository extends JpaRepository<DBFile, String> {
}
