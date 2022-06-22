import React from 'react';
import Fovoritemini from './Fovoritemini';
import './sidebar.scss';

const Favorite = () => {
  return (
    <div className="favorite">
      <h3 className="favorite__title">Избранное</h3>
      <div className="favorite_mobile_scroll">
        <Fovoritemini />
        <Fovoritemini />
        <Fovoritemini />
        <Fovoritemini />
        <Fovoritemini />
        <Fovoritemini />
      </div>

    </div>
  );
};

export default Favorite;
