import React from 'react';
import BoxOfficeList from './../components/boxOffiec/BoxOfficeList';
import BoxOfficeBaner from './../components/boxOffiec/BoxOfficeBaner';
import styles from '../css/main.module.css';

const Main = () => {
    return(
        <div className={styles.bg}>
            <BoxOfficeBaner/>
            <BoxOfficeList/>
        </div>
    )
};

export default Main;