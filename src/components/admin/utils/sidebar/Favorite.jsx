import React from 'react';
import Fovoritemini from './Fovoritemini';
import "./sidebar.scss";
const Favorite = () => {
    return (
        <div className="favorite">
            <h3 className='favorite__title'>Избранное</h3>    
            <Fovoritemini />
            <Fovoritemini />
            <Fovoritemini />
        </div>
    );
}

export default Favorite;
