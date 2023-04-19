import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlayingMovie } from '../../store/store';
import Loading from '../../components/common/Loading';
import StarRatings from 'react-star-ratings';
import BoxOfficeBaner from '../boxOffiec/BoxOfficeBaner';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/main.module.css';

const NowPlayingMovie = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { nowPlayingMovie, isLoading, error } = useSelector((state) => state.nowPlayingMovie);  

    useEffect(() => {
        dispatch(getNowPlayingMovie());
    }, [dispatch])

    const handleMovieClick = (id) => {
        navigate(`/movieDetail/${id}`);
    }

    if(isLoading) {
        return <Loading/>
    }

    if(error) { 
        return <div>{error.message}</div>
    }

    return (
        <div>
            <BoxOfficeBaner/>
            <div className='container grid grid-cols-2 gap-2 lg:grid-cols-4 mx-auto justify-center'>
                {
                    nowPlayingMovie.map((movie, index) => {
                        return (
                            <div key={movie.id} onClick={() => handleMovieClick(movie.id)} className="border-4 border-f0f5f9-600 shadow-xl p-8 my-5 cursor-pointer">
                                <img className='' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                                <h2 className='text-center mt-5 font-bold text-lg'>{movie.title}</h2>
                                <div className='flex'>
                                    <p className='mr-3'>평점 : {movie.vote_average.toFixed(1)} / 10 </p>
                                </div>
                                <StarRatings
                                    svgIconPath='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                                    svgIconViewBox='0 0 24 24'
                                    rating={movie.vote_average / 2}
                                    starRatedColor='red'
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='20px'
                                />
                                <p className={styles.movie_overview}>{movie.overview}</p>
                            </div>
                        )
                    })
                }
                { nowPlayingMovie.length === 0 && <div>상영중인 영화가 없습니다.</div>}
            </div>
        </div>
    );
}

export default NowPlayingMovie;
