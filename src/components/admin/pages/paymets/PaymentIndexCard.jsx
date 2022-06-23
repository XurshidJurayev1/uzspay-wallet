import React from 'react';
import './PaymentIndexCard.scss';
import alias from '../../../../assets/svg/download 2.svg';

const PaymentIndexCard = () => {
  return (<div>
      <div className="payment_index__card">
        <div className="payment_index__img">
          <img src={alias} alt="png" />
        </div>
        <div className="payment_index__title">
          <p>Пополнить</p>
        </div>
      </div>
    </div>);
};

export default PaymentIndexCard;