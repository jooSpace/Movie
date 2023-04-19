import React from 'react';
import unImg from '../../resource/un_img.jpg'

const MovieDetailCredits = ({credits}) => {

    const creditsResult = credits && credits.cast;


    return (
        <div className='mt-10'>
            <h1 className='font-bold text-xl'>주요 출연진</h1>
            <div>
                {creditsResult &&
                    <div className='flex flex-wrap mb-10 justify-center items-center mt-10'>
                    {
                        credits.cast.map((cast, index) => {
                            return index > 9 
                            ?''
                            :<div key={index} className='justify-center w-1/5' style={{ textAlign:'-webkit-center'}}>
                                <div className='min-h-min py-3'>
                                    <div className='border border-slate-400 rounder-md drop-shadow-lg' style={{width:'140px', height:'250px'}}>
                                        <img src={cast && cast.profile_path ? `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}` : unImg} alt='actor'></img>
                                        <ul>                                       
                                            <li className='text-sm font-bold mt-2'>{cast.name}</li>
                                            <li className='text-xs'>{cast.character}</li>
                                        </ul>  
                                    </div>
                                </div>                              
                            </div>
                        })
                    }
                    </div>
                }                                   
            </div>
        </div>
    );
}

export default MovieDetailCredits;
