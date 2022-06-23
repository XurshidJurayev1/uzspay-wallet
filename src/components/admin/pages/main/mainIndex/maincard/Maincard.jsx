import React from 'react';
import alias from '../../../../../../assets/images/Ellipse 466.png';
import './maincard.scss';

const Maincard = () => {
  return (
    <div>
      <div className="mainindex__card">
        <div className="mainindex__img">
          <img src={alias} alt="png" />
        </div>
        <div className="mainindex__title">
          <p>Перевод Яре</p>
        </div>
      </div>
    </div>
  );
};

export default Maincard;
