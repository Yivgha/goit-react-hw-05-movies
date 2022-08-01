import { useEffect, useState } from 'react';
import { TrendingMovies } from 'service/Api';
import { MoviesList } from "../components/MoviesList"

export const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    TrendingMovies().then(setMovies);
  },[]);
  return (
    <>
      <h1>Trending today:</h1>
      <MoviesList movies={movies} />
    </>
  );
};