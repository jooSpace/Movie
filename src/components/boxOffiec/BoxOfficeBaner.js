import React from 'react';
import MainLottieFiles from './MainLottieFiles';

const BoxOfficeBaner = () => {

    let today = new Date(); 
    let time = {
      year: today.getFullYear(),
      month: today.getMonth() + 1, 
      date: today.getDate(),
      hours: today.getHours(), 
      minutes: today.getMinutes(), 
    }

    let timestring = `${time.year}-${time.month}-${time.date} ${time.hours}:${time.minutes}`;

    return (
        <div className='container mx-auto flex justify-center'>
            <div className='lg:w-1/4 md:w-1/2 w-3/6 justify-center'>
                <MainLottieFiles/>
                <p className='text-center'>today : {timestring}</p>
            </div>
        </div>
    );
};

export default BoxOfficeBaner;