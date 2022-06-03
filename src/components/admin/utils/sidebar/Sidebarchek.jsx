import React from 'react';
import{ReactComponent as Vector} from "../../../../assets/svg/Vector.svg";
import {ReactComponent as Vector2} from "../../../../assets/svg/send_1.svg" ;
const Sidebarchek = () => {
    return (
        <div className="sidebar__chek">
            <div className="sidebar__chek-balance">
                <p className="sidebar__chek-count"> Баланс счета <span>**5667</span></p>
                <p className="sidebar__chek-number">5 459 802 <span>wsm</span></p>
            </div>
            <div className="sidebar__chek-buttons">
                <a className="sidebar__chek-buttons-up sidebar__chek-buttons-up" href="javascriptVoid"><Vector2 className="icon__white icon__whitei" /> Пополнить</a>
                <a className="sidebar__chek-buttons-up sidebar__chek-buttons-up-active" href="javascriptVoid"><Vector className="icon__white icon__whitet" /> Перевести</a>
            </div>
        </div>
    );
}

export default Sidebarchek;
