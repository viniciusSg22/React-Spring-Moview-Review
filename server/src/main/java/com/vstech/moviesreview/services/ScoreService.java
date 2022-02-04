package com.vstech.moviesreview.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vstech.moviesreview.dto.MovieDTO;
import com.vstech.moviesreview.dto.ScoreDTO;
import com.vstech.moviesreview.entities.Movie;
import com.vstech.moviesreview.entities.Score;
import com.vstech.moviesreview.entities.User;
import com.vstech.moviesreview.repositories.MovieRepository;
import com.vstech.moviesreview.repositories.ScoreRepository;
import com.vstech.moviesreview.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ScoreRepository scoreRepository;

	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}

		Movie movie = movieRepository.findById(dto.getMovieId()).get();

		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());

		score = scoreRepository.saveAndFlush(score);

		double sum = 0.0;
		for (Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}

		int size = movie.getScores().size();
		double avg = sum / size;

		movie.setScore(avg);
		movie.setCount(size);

		movie = movieRepository.save(movie);

		return new MovieDTO(movie);
	}
}
