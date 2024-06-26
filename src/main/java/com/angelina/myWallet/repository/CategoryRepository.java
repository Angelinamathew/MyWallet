package com.angelina.myWallet.repository;

import com.angelina.myWallet.model.Category;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// connect category to db
public interface CategoryRepository extends JpaRepository<Category, Long> {
     Category findByName(String name);
     Optional<Category> findAllById(Long id);

}


