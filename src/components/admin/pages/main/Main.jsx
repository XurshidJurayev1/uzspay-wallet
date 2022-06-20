import React from 'react';
// import Navbar from '../../utils/navbar/Navbar';
import Sidebar from '../../utils/sidebar/Sidebar';
import Accardion from '../../utils/sidebar/Accardion';
import Sidebarchek from '../../utils/sidebar/Sidebarchek';
import MainIndex from './mainIndex/MainIndex';
import './main.scss';
import Recent from '../../utils/recent/Recent';

import Mainbanner from './Mainbanner';
import Lastbutton from '../../utils/buttons/Lastbutton';
import AccardionMobile from '../../utils/sidebar/AccardionMobile';


const Main = () => {
  const text = 'Добавить карту';
  return (
    <div>
      {/*<Navbar />*/}
      <div className="wrapper">
        <div className="wrapper__sidebar">
          <Sidebar title={text} favorite={[<Sidebarchek />, <Accardion />]} />
        </div>
        <div className="wrapper__sidebar__mobile">
          <Sidebar title={text} favorite={[<Sidebarchek />, <AccardionMobile />]} />
        </div>
        <div className="wrapper__main">
          <Mainbanner />
          <MainIndex />
          <Recent />
          <div className="mt-5">
            <Lastbutton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
