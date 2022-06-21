import {ReactComponent as Phone} from "../../../../../../assets/svg/phone.svg" ;
import React from 'react';
import "./mphone.scss";
const Mainphonecard = () => {
    return (
        <div className="mainindex__phone">
            <div className="mainindex__telephone">
                Оплатить мобильный телефон
            </div>
          <div className="mainindex__icon">
            <Phone className="main__cion" />
          </div>
        </div>
    );
}

export default Mainphonecard;
