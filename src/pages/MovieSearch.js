import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearchMovies } from '../store/store';
import Loading from '../components/common/Loading';

const MovieSearch = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const { searchMovies, isLoading, error } = useSelector((state) => state.searchMovies);
  
    useEffect(() => {
        dispatch(getSearchMovies(query));
    }, [dispatch, query]);
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };

    const handleMovieClick = (id) => {
      navigate(`/movieDetail/${id}`);
    }
  
    return (
      <div className='container mx-auto mx-lg items-center justify-center'>
        <div className='h-screen'>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">검색</label>
          <div className="relative mt-10">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" value={query} onChange={handleInputChange} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:none focus:border-blue-500" placeholder="영화 검색" required/>
          </div>
          {isLoading && <div><Loading/></div>}
          {error && <div>{error.message}</div>}
          {searchMovies.length > 0 && (
            <div>
              <ul>
                {searchMovies.map((movie) => (
                  <li key={movie.id} onClick={() => handleMovieClick(movie.id)} className='cursor-pointer'>{movie.title}</li>
                ))}
              </ul>
            </div>
          )}
          {searchMovies.length === 0 && !isLoading && <div></div>}
        </div>
      </div>
    );
  };
  
export default MovieSearch;