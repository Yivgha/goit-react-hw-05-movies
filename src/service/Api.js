import axios from 'axios';

axios.defaults.headers['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'https://api.themoviedb.org';

axios.defaults.params = {
  api_key: '8e0288e6c002e9adeca41ab040f8eda1',
};

export async function TrendingMovies() {
  const { data }= await axios.get(`/3/trending/movie/day`);
  return data.results;
};

export async function SearchMovie(query) {
  const { data }= await axios.get(`/3/search/movie?query=${query}`);

  return data.results;
};

export async function DetailsMovies(id) {
  const { data }= await axios.get(`/3/movie/${id}`);
  return data;
};

export async function CreditsMovie(movie_id) {
  const { data } = await axios.get(`3/movie/${movie_id}/credits`);

  return data;
};

export async function ReviewsMovie(movie_id) {
  const { data }= await axios.get(`3/movie/${movie_id}/reviews`);

  return data;
};