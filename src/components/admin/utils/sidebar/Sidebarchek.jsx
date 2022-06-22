import React from 'react';
import { ReactComponent as Vector } from '../../../../assets/svg/Vector.svg';
import { ReactComponent as Vector2 } from '../../../../assets/svg/send_1.svg' ;
import { Link } from 'react-router-dom';

const Sidebarchek = () => {
  return (
    <div className="sidebar__chek">
      <div className="sidebar__chek-balance">
        <p className="sidebar__chek-count"> Баланс счета <span>**5667</span></p>
        <p className="sidebar__chek-number">5 459 802 <span>wsm</span></p>
      </div>
      <div className="sidebar__chek-buttons">
        <Link to="/wallet/payment/trans" className="sidebar__chek-buttons-up sidebar__chek-buttons-up"><Vector2
          className="icon__white icon__whitei" /> Пополнить</Link>
        <Link to="/wallet/payment/trans" className="sidebar__chek-buttons-up sidebar__chek-buttons-up-active"
        ><Vector className="icon__white icon__whitet" /> Перевести</Link>
      </div>
    </div>
  );
};

export default Sidebarchek;
