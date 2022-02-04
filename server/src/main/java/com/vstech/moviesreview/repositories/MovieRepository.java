package com.vstech.moviesreview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vstech.moviesreview.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
}
