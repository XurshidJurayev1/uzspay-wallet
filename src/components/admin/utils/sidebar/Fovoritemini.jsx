import React from 'react';
import user from "../../../../assets/images/user_sidebar.png"

const Fovoritemini = () => {
    return (
        <div className="favorite__item">
            <div className="favorite__img">
                <img src={user} alt="png" />
            </div>
            <div className="favorite__text">
                <span className="favorite__text-title">Перевод Яре</span>
                <span className="favorite__text-grey">Последний перевод 500 000  wsm</span>
            </div>
        </div>
    );
}

export default Fovoritemini;
