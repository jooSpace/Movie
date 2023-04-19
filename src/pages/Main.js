import React, { useState } from 'react';
import BoxOfficeDayList from '../components/boxOffiec/BoxOfficeDayList';
import BoxOfficeWeekList from '../components/boxOffiec/BoxOfficeWeekList';
import BoxOfficeBaner from './../components/boxOffiec/BoxOfficeBaner';

const Main = () => {

    const [Tab, setTab] = useState(0);
    const menuArr = [
        {name: 'Day', content:<BoxOfficeDayList/>, },
        {name: 'Week', content:<BoxOfficeWeekList/>}
    ]

    const selectMenuHandler = (index) => {
        setTab(index);
    }

    return(
        <div>
            <BoxOfficeBaner/>
            <div className='container mx-auto flex font-bold items-center justify-center list-none'>
                {menuArr.map((el,index) => (
                    <li key={index} onClick={() => selectMenuHandler(index)}>
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                            <li>
                                <button className={index === Tab 
                                    ? "inline-block p-4 border-b-2 border-blue-600 rounded-t-lg text-2xl"  
                                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-2xl" }>
                                    <p className={index === Tab
                                    ? "text-blue-500"
                                    : ""
                                    }>{el.name}</p>
                                </button>
                            </li>
                        </ul>
                    </li>
                ))}
            </div>
                <div>
                    <div>{menuArr[Tab].content}</div>
                </div>
            {/* <BoxOfficeDayList/> */}
        </div>
    )
};

export default Main;