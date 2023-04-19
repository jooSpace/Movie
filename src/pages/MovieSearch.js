import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchMovies } from '../store/store';
import Loading from '../components/common/Loading';

const MovieSearch = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const { searchMovies, isLoading, error } = useSelector((state) => state.searchMovies);
  
    useEffect(() => {
        dispatch(getSearchMovies(query));
    }, [dispatch, query]);
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={query} onChange={handleInputChange} />
        {isLoading && <div><Loading/></div>}
        {error && <div>{error.message}</div>}
        {searchMovies.length > 0 && (
          <ul>
            {searchMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
        {searchMovies.length === 0 && !isLoading && <div></div>}
      </div>
    );
  };
  
export default MovieSearch;