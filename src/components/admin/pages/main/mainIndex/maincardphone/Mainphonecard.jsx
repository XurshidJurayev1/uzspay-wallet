import phone from '../../../../../../assets/images/phone.png'
import React from 'react';
import "./mphone.scss";
const Mainphonecard = () => {
    return (
        <div className="mainindex__phone">
            <div className="mainindex__telephone">
                Оплатить мобильный телефон
            </div>
            <div className="mainindex__icon">
                <img src={phone} alt="png" />
            </div>
        </div>
    );
}

export default Mainphonecard;
