import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import { MoviesList } from '../components/MoviesList';
import { SearchMovie } from 'service/Api';
import { Form, Btn, Input } from './Pages.styled';

export const MoviePage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPosition = searchParams.get('query');

  useEffect(() => {
    if (!currentPosition) return;
    SearchMovie(currentPosition)
      .then(data => {
        if (data.length === 0) {
          toast.error('No found');
          setSearchParams({});
          return;
        }
        setMovies(data);
      })
      .catch(error => console.error(error));
  }, [currentPosition, setSearchParams]);

  const onSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter the text');
      return;
    }
    setSearchParams({ query: query.trim() });
  };
  const handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    setQuery(text);
  };

  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <Input type="search" name={query} onChange={handelInputChange} />
        <Btn type="submit">
          <BsSearch />
        </Btn>
      </Form>
      <MoviesList movies={movies} />
    </>
  );
};