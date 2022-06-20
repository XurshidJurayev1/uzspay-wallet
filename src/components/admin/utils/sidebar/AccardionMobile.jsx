import React from 'react';
import Acar from './Acar';
import AcarMobile from './AcarMobile';
import card from '../../../../assets/images/card.png';
import uzb from '../../../../assets/images/uzb_Ra.png';
import eng from '../../../../assets/images/engMask.png';
import visa from '../../../../assets/images/cardVisa.png';

const AccardionMobile = () => {


  return (
    <div>
      <div className="sidebar__acardion">
        <h2>Мои карты</h2>
        <AcarMobile summ="3 426 789 сум" unit="Сумовые карты" cards={[card, card, card]} flag={uzb} />
        <AcarMobile summ="$1287" unit="Долларовые карты" cards={[visa, visa]} flag={eng} />

      </div>
    </div>
  );
};

export default AccardionMobile;