import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";
import AddMovie from "./AddMovie";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MovieList = ({ movies, filterTitle, filterRating, setMovies }) => {
  return (
    <div className="movies__container">
      <div className="movie__add">
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
      <motion.div layout className="moviesList">
        <AnimatePresence>
          {movies
            .filter(
              (movie) =>
                movie.title
                  .toLowerCase()
                  .trim()
                  .includes(filterTitle.toLowerCase().trim()) &&
                movie.rating >= filterRating
            )
            .map((movie) => (
              <div key={movie.id}>
                <Link style={{textDecoration: 'none'}} to={`/${movie.id}`}>
                  <MovieCard movie={movie} key={movie.id} />
                </Link>
              </div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MovieList;
