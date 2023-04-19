import React from 'react';
import MovieDetailCard from '../components/boxOffiec/MovieDetailCard';
import MovieDetailCredits from '../components/boxOffiec/MovieDetailCredits';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/common/Loading';
import { useEffect } from 'react';
import { getMovieDetail, getCredits } from '../store/store.js';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {

    const dispatch = useDispatch();
    const { movieId } = useParams();
    const { movieDetail, isLoading, error } = useSelector((state) => state.movieDetail);
    const { credits } = useSelector((state) => state.credits);

    useEffect(() => {
        dispatch(getMovieDetail(movieId));
    }, [dispatch, movieId]);

    useEffect(() => {
        dispatch(getCredits(movieId));
    }, [dispatch, movieId]);

    if(isLoading) {
        return <Loading/>
    }

    if(error) { 
        return <div>{error.message}</div>
    }

    return (
        <div className='container mx-auto'>
            <MovieDetailCard movieDetail={movieDetail} credits={credits}/>
            <MovieDetailCredits credits={credits}/>
        </div>
    );
}

export default MovieDetail;
