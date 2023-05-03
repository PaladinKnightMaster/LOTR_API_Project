import React from 'react';
import { Link } from 'react-router-dom';

import Movie from '../models/Movie';

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <li className="movie-list-item">
      <Link to={`/movies/${movie._id}`}>
        <h2>{movie.name}</h2>
        <p>Runtime: {movie.runtimeInMinutes} mins</p>
        <p>Budget: ${movie.budgetInMillions}m</p>
        <p>Box Office Revenue: ${movie.boxOfficeRevenueInMillions}m</p>
      </Link>
    </li>
  );
};

export default MovieListItem;
