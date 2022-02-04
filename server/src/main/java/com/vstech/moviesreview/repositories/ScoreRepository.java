package com.vstech.moviesreview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vstech.moviesreview.entities.Score;
import com.vstech.moviesreview.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
