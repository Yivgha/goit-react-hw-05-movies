import PropTypes from 'prop-types';
import { FilmItem, FilmList } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {

  const location = useLocation();

  return (
    <FilmList>
      {movies &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <FilmItem to={`/movies/${id}`} state={{from:location}}>{title}</FilmItem>
          </li>
        ))}
    </FilmList>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array,
};