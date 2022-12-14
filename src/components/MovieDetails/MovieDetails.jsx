import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, Navigate, useLocation } from 'react-router-dom';
import { Links, List } from '../../pages/Pages.styled';
import { DetailsMovies } from '../../service/Api';
import { getGenres } from 'service/getGenres';
import { BackLink } from 'components/Backlink';

import {
  Image,
  Section,
  ListWrapper,
  TitleOption,
  TextOption,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const { title, poster_path, vote_average, overview, genres } = movie;
 
  const [error, setError] = useState(false);

  useEffect(() => {
    DetailsMovies(movieId)
      .then(data => {
        if (data.length !== 0) {
          return setMovie(data);
        }
      })
      .catch(error => {
        console.error(error);
        setError(true);
      });
  }, [movieId]);

  const location = useLocation();
  const href = location.state?.from ?? '/';
  const search = useRef(location.state?.from?.search);

  return (
    <>
      {error && <Navigate to="/" replace />}

      <BackLink href={href} />
      {movie.length !== 0 && (
        <>
          <Section>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <ListWrapper>
              <h1>{title}</h1>
              <TitleOption>User score:</TitleOption>
              <TextOption> { Math.floor(vote_average * 10) }%</TextOption>
              <TitleOption>Overview: </TitleOption>
              <TextOption>{overview}</TextOption>
              <TitleOption>Genres:</TitleOption>
              <TextOption> {getGenres(genres)}</TextOption>
            </ListWrapper>
          </Section>
          <List>
            <h3>Additional information:</h3>
            <li>
              <Links
                to="cast"
                state={{
                  from: search.current ? `/movies${search.current}` : '/',
                }}
              >
                Cast
              </Links>
            </li>
            <li>
              <Links
                to="reviews"
                state={{
                  from: search.current ? `/movies${search.current}` : '/',
                }}>
                Reviews
              </Links>
            </li>
          </List>
          <Outlet />
        </>
      )}
    </>
  );
}