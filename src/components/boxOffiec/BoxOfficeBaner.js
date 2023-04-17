import React, { useEffect, useState } from 'react';
import MainLottieFiles from './MainLottieFiles';
import moment from 'moment';
import styles from '../../css/boxOfficeBaner.module.css'

const BoxOfficeBaner = () => {

    const [time, setTime] = useState(moment());

    useEffect(()=> {
        let timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);


    // let today = new Date(); 
    // let time = {
    //   year: today.getFullYear(),
    //   month: today.getMonth() + 1, 
    //   date: today.getDate(),
    //   hours: today.getHours(), 
    //   minutes: today.getMinutes(), 
    // }

    // let timestring = `${time.year}-${time.month}-${time.date} ${time.hours}:${time.minutes}`;

    return (
        <div className='container mx-auto flex justify-center'>
            <div className='lg:w-1/4 md:w-1/2 w-3/6 justify-center'>
                <MainLottieFiles/>
                <p className={styles.neon_date}>today : {time.format('YYYY-MM-DD')}</p>
                <p className={styles.neon_time}>{time.format('HH-mm-ss')}</p>
            </div>
        </div>
    );
};

export default BoxOfficeBaner;