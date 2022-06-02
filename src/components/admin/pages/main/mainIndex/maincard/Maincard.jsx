import React from 'react';
import elipse from "../../../../../../assets/images/Ellipse 466.png";
import "./maincard.scss";
const Maincard = () => {
    return (
        <div>
            <div className="mainindex__card">
                <div className="mainindex__img">
                    <img src={elipse} alt="png" />
                </div>
                <div className="mainindex__title">
                    <p>Перевод Яре</p>
                </div>
            </div>
        </div>
    );
}

export default Maincard;
