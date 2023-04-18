import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/common/Loading';
import { useEffect } from 'react';
import { getMovieDetail } from '../store/store';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {

    const dispatch = useDispatch();
    const { movieId } = useParams();
    const { movieDetail, isLoading, error } = useSelector((state) => state.movieDetail);

    useEffect(() => {
        dispatch(getMovieDetail(movieId));
    }, [movieId, dispatch]);

    if(isLoading) {
        return <Loading/>
    }

    if(error) { 
        return <div>{error.message}</div>
    }

    return (
        <div>
            <p>{movieDetail.backdrop_path}</p>
            <p>{movieDetail.title}</p>
            <p>{movieDetail.overview}</p>
        </div>
    );
}

export default MovieDetail;
