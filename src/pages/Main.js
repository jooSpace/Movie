import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../store/store';

const Main = () => {

    const dispatch = useDispatch();
    const { movie, isLoading, error } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(getMovie());
    }, [dispatch]);

    if(isLoading) {
        return <div>로딩중...</div>
    }

    if(error) {
        return <div>{error.message}</div>
    }

    return (
        <div className='container grid grid-cols-4 gap-4 mx-auto justify-center'>
            {movie.map((movie, idx) => (
            <div key={idx} className="border border-4 border-f0f5f9-600 shadow-2xl">
                <img className='' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <h2 className='text-center'>{movie.title}</h2>
                <p>{movie.overview}</p>
                
            </div>
            ))}
        </div>
    );
};

export default Main;