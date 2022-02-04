package com.vstech.moviesreview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vstech.moviesreview.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
