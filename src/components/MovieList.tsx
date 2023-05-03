import React, { useEffect, useState } from 'react';

import Movie from '../models/Movie';
import { LordOfRingsAPI } from '../services/LordOfRingsAPI';
import MovieListItem from './MovieListItem';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await LordOfRingsAPI.get('/movie');
        setMovies(response.data.docs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <MovieListItem key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
