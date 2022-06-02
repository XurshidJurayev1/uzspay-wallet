import React from 'react';
import icon from '../../../../../assets/images/icon.png';
import "./recentmini.scss";
const Recentmini = () => {
    return (
        <div className="recent__block">
            <div className="recent__left">
                <div className="recent__left-img">
                    <img src={icon} alt="png" />
                </div>
                <div className="recent__left-text">
                    <span className="recent__left-text-a">Spotify AB</span>
                    <span className="recent__left-text-c">Музыка</span>
                </div>
            </div>
            <div className="recent__right">
                <span className="recent__price">- 54 930 wsm</span>
                <span className="recent__price-course">$4.99</span>
            </div>
        </div>

    );
}

export default Recentmini;
