import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../store/store';
import styles from '../../css/main.module.css';
import StarRatings from 'react-star-ratings';
import medal_1 from '../../resource/madal_1.png';
import medal_2 from '../../resource/madal_2.png';
import medal_3 from '../../resource/madal_3.png';

const BoxOfficeList = () => {

    const dispatch = useDispatch();
    const { movie, isLoading, error } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(getMovie());
    }, [dispatch],);

    if(isLoading) {
        return <div>로딩중...</div>
    }

    if(error) { 
        return <div>{error.message}</div>
    }

    return (
        <div className='container grid grid-cols-2 gap-2 lg:grid-cols-4 mx-auto justify-center'>
            {
                movie.map((movie, index) => {
                if (index === 0) {
                    return (
                    <div key={index} className="border-4 border-f0f5f9-600 shadow-xl p-8 my-5 ">
                        <img className={styles.medal} src={medal_1} alt='medal'></img>
                        <img className='' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                        <h2 className='text-center mt-5 font-bold text-lg'>{movie.title}</h2>
                        <p className='mt-5'>개봉일 : {movie.release_date}</p>
                        <div className='flex'>
                            <p className='mr-3'>평점 : {movie.vote_average} / 10 </p>
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
                        <p>누적 관람객 : {movie.vote_count}만</p>
                        <p className={styles.movie_overview}>{movie.overview}</p>
                    </div>
                    );
                } else if (index === 1) {
                    return (
                        <div key={index} className="border-4 border-f0f5f9-600 shadow-xl p-8 my-5 ">
                            <img className={styles.medal} src={medal_2} alt='medal'></img>
                            <img className='' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                            <h2 className='text-center mt-5 font-bold text-lg'>{movie.title}</h2>
                            <p className='mt-5'>개봉일 : {movie.release_date}</p>
                            <div className='flex'>
                                <p className='mr-3'>평점 : {movie.vote_average} / 10 </p>
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
                            <p>누적 관람객 : {movie.vote_count}만</p>
                            <p className={styles.movie_overview}>{movie.overview}</p>
                        </div>
                        );
                } else if (index === 2) {
                    return (
                        <div key={index} className="border-4 border-f0f5f9-600 shadow-xl p-8 my-5 ">
                            <img className={styles.medal} src={medal_3} alt='medal'></img>
                            <img className='' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                            <h2 className='text-center mt-5 font-bold text-lg'>{movie.title}</h2>
                            <p className='mt-5'>개봉일 : {movie.release_date}</p>
                            <div className='flex'>
                                <p className='mr-3'>평점 : {movie.vote_average} / 10 </p>
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
                            <p>누적 관람객 : {movie.vote_count}만</p>
                            <p className={styles.movie_overview}>{movie.overview}</p>
                        </div>
                        );
                } else {
                    return (
                        <div key={index} className="border-4 border-f0f5f9-600 shadow-xl p-8 my-5 ">
                            <img className='' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                            <h2 className='text-center mt-5 font-bold text-lg'>{movie.title}</h2>
                            <p className='mt-5'>개봉일 : {movie.release_date}</p>
                            <div className='flex'>
                                <p className='mr-3'>평점 : {movie.vote_average} / 10 </p>
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
                            <p>누적 관람객 : {movie.vote_count}만</p>
                            <p className={styles.movie_overview}>{movie.overview}</p>
                        </div>
                        );
                }
                     
                })
            }
        </div>
    );
};

export default BoxOfficeList;