import React from 'react';
import Navbar from '../../utils/navbar/Navbar';
import Sidebar from '../../utils/sidebar/Sidebar';
import MainIndex from './mainIndex/MainIndex';
import "./main.scss";
import Recent from '../../utils/recent/Recent';

import Mainbanner from './Mainbanner';


const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="wrapper">
                <div className="wrapper__sidebar">
                    <Sidebar />
                </div>
                <div className="wrapper__main">
                    <Mainbanner />
                    <MainIndex />
                    <Recent />
                </div>
            </div>
        </div>
    );
}

export default Main;
