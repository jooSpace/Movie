import React from 'react';
import BoxOfficeList from './../components/boxOffiec/BoxOfficeList';
import BoxOfficeBaner from './../components/boxOffiec/BoxOfficeBaner';

const Main = () => {
    return(
        <div>
            <BoxOfficeBaner/>
            <BoxOfficeList/>
        </div>
    )
};

export default Main;