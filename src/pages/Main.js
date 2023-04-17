import React, { useState } from 'react';
import BoxOfficeDayList from '../components/boxOffiec/BoxOfficeDayList';
import BoxOfficeWeekList from '../components/boxOffiec/BoxOfficeWeekList';
import BoxOfficeBaner from './../components/boxOffiec/BoxOfficeBaner';

const Main = () => {

    const [currentTab, clickTab] = useState(0);
    const menuArr = [
        {name: 'Day', content:<BoxOfficeDayList/>, },
        {name: 'Week', content:<BoxOfficeWeekList/>}
    ]

    const selectMenuHandler = (index) => {
        clickTab(index);
    }

    return(
        <div>
            <BoxOfficeBaner/>
            <div>
                {menuArr.map((el,index) => (
                    <li key={index} className={index === currentTab ? "submenu focused" : "submenu" }
                        onClick={() => selectMenuHandler(index)}>{el.name}
                    </li>
                ))}
            </div>
                <div>
                    <div>{menuArr[currentTab].content}</div>
                </div>
            {/* <BoxOfficeDayList/> */}
        </div>
    )
};

export default Main;