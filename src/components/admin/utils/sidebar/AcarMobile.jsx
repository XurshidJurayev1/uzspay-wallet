import React from 'react';
import './AcarMobile.scss';

const AcarMobile = (props) => {
  console.log(props);
  return (
    <div className="acar-mobile">
      <div className="acar-mobile-header">
        <div className="acar-mobile-header-flag" style={{ backgroundImage: `url(${props.flag})` }} />
        <div className="acar-mobile-header-summ">
          <h4>{props.summ}</h4>
          <p>{props.unit}</p>
        </div>
      </div>
      <div className="acar-mobile-cards">
        {
          props.cards.map((item, idx) => {
            return (
              <div key={idx} className="acar-mobile-cards-card" style={{ backgroundImage: `url(${item})` }} />
            );
          })
        }
      </div>
    </div>
  );
};

export default AcarMobile;