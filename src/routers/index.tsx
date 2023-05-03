import { useRoutes } from 'react-router-dom';

import MovieList from '../components/MovieList';
import NotFound from '../components/NotFound';
import Home from '../pages/Home';
import MovieDetails from '../pages/Movie/[id]';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/movies', element: <MovieList /> },
    { path: '/movies/:id', element: <MovieDetails /> },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
};

export default AppRoutes;
