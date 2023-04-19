import React from 'react';

const MovieDetailCard = ({movieDetail, credits}) => {

    const backgroundImage = movieDetail && movieDetail.backdrop_path ? `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieDetail.backdrop_path})` : null;
    const postImage = movieDetail && movieDetail.poster_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}` : null;
    const title = movieDetail && movieDetail.title;
    const release_date = movieDetail && movieDetail.release_date;
    const runtime = movieDetail && movieDetail.runtime;
    const tagline = movieDetail && movieDetail.tagline;
    const overview = movieDetail && movieDetail.overview;
    const genres = movieDetail && movieDetail.genres;

    const creditsResult = credits && credits.crew;

    const style = {
        backgroundImage : backgroundImage
    }

    return (
        <div style={style} className='bg-cover'>
            <div style={{backgroundImage : "linear-gradient(to right, rgba(31.5, 31.5, 94.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 94.5, 0.84) 50%, rgba(31.5, 31.5, 94.5, 0.84) 100%)"}}>
                <section className='flex p-10 text-white'>
                    <div className='poster'>
                        <img src={postImage} alt='post'></img>
                    </div>
                    <div className='flex flex-wrap align-center pl-10 w-2/3'>
                        <div className='w-full h-10 pt-5'>
                            <h1 className='font-bold text-4xl'>{title}</h1>     
                            <div className='w-full flex mt-2'>
                                <p>{release_date}</p>
                                <ul className='flex'>
                                {genres &&
                                    <ul className='flex'>
                                    {
                                        movieDetail.genres.map((genre, index) => {
                                            return <li key={genre.id} className='mx-2'> {genre.name}</li>
                                        })
                                    } 
                                    </ul>
                                }
                                </ul>
                                <p>{runtime}분</p>
                            </div> 
                            <div className='w-full flex-wrap mt-5'>
                                <h3 className='italic text-lg opacity-70'>{tagline}</h3>
                                <p className='my-2 font-bold text-xl'>개요</p>                       
                                <p className='text-sm'>{overview}</p>
                            </div>
                            <div className='w-full flex-wrap mt-5'>
                                <div>{creditsResult &&
                                        <div className='flex flex-wrap'>
                                        {
                                            credits.crew.map((crew, index) => {
                                                return index > 7 
                                                ?''
                                                :<ul key={index} className='mr-7 w-1/5 mb-3'>
                                                    <li className='font-bold'>{crew.department}</li>
                                                    <li className='text-sm'>{crew.original_name}</li>
                                                </ul>;  
                                            })
                                        }
                                        </div>
                                    }                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MovieDetailCard;
