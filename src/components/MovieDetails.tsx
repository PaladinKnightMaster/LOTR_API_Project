import React from 'react';

import Movie from '../models/Movie';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <h1>{movie.name}</h1>
      <p>Runtime: {movie.runtimeInMinutes} minutes</p>
      <p>Budget: ${movie.budgetInMillions} million</p>
      <p>Box Office Revenue: ${movie.boxOfficeRevenueInMillions} million</p>
      <p>Academy Award Nominations: {movie.academyAwardNominations}</p>
      <p>Academy Award Wins: {movie.academyAwardWins}</p>
      <p>Rotten Tomatoes Score: {movie.rottenTomatoesScore}%</p>
    </div>
  );
};

export default MovieDetails;
