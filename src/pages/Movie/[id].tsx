import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetails from '../../components/MovieDetails';
import QuoteList from '../../components/QuoteList';
import Movie from '../../models/Movie';
import { LordOfRingsAPI } from '../../services/LordOfRingsAPI';

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    LordOfRingsAPI.get(`/movie/${id}`)
      .then((res) => setMovie(res.data.docs[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <MovieDetails movie={movie} />
          <QuoteList movie={movie} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePage;
