import React from 'react';
import "./categorys.scss";
import phone from "../../../../../assets/images/phone.png"
const Categroys = () => {
    return (
        <div className="category__paymets">
            <div className="category__paymets-title">
                <h3>Мобильная связь</h3>
                <p>Моментально пополняйте баланс у операторов Узбекистана и стран СНГ</p>
            </div>
            <div className="category__paymets-img">
                <img src={phone} alt="png" />
            </div>
        </div>
    );
}

export default Categroys;
