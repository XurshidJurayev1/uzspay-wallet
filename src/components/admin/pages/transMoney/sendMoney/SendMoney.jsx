import React, { useState } from 'react';
import './SendMoney.scss';
import security from '../../../../../assets/svg/security1.svg';
import security2 from '../../../../../assets/svg/security2.svg';
import { ReactComponent as Close } from '../../../../../assets/svg/close2.svg';
import InputMask from 'react-input-mask';


const SendMoney = () => {
  const [sum, setSum] = useState('');
  return (<div className="send-money">
    <div className="send-money-container">
      <h2 className="send-money-container-title">
        Отправить деньги
      </h2>
      <div className="send-money-container-security">
        <div className="send-money-container-security-title">
          <div className="send-money-container-security-sec" style={{ backgroundImage: `url(${security}` }}>
            <div className="send-money-container-security-sec-div" style={{ backgroundImage: `url(${security2}` }} />
          </div>
          <h3>Эта ссылка безопасна!</h3>
        </div>
        <p className="send-money-container-security-p">
          Эту ссылку на пополнение сгенерировал пользователь Ахмед +998 (97) 733-30-06
          Отправленные деньги попадут прямо на его счёт
        </p>
        <div className="send-money-container-security-close">
          <Close />
        </div>
      </div>
      <div className="send-money-container-content">
        <h3 className="send-money-container-content-title">
          С карты
        </h3>
        <div className="send-money-container-content-input-card">

        </div>
        <h3 className="send-money-container-content-title">
          Сумма, которую запросил Ахмед
        </h3>
        <div className="send-money-container-content-input-sum">
          <div className="send-money-container-content-input-sum-input">
            <InputMask
              value={sum}
              onChange={(e) => setSum(e.target.value)}
            />
            <label className="send-money-container-content-input-sum-input-label"
                   style={sum.length > 0 ? { top: '4px' } : null}>Сумма WMS</label>
          </div>
          <span>1 WSM = 1 сум (UZS)</span>
        </div>
        <div className="send-money-container-content-btn">
          <div className="send-money-container-content-btn-cen"> Отмена</div>
          <div className="send-money-container-content-btn-send">Отправить 1 000 000 сум</div>
        </div>
      </div>
    </div>
  </div>);
};

export default SendMoney;