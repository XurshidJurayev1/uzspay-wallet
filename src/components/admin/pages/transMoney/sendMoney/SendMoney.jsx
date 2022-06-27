import React, { useState } from 'react';
import './SendMoney.scss';
import security from '../../../../../assets/svg/security1.svg';
import security2 from '../../../../../assets/svg/security2.svg';
import { ReactComponent as Close } from '../../../../../assets/svg/close2.svg';
import { ReactComponent as Close2 } from '../../../../../assets/svg/closeInput.svg';
import { ReactComponent as Caretdown } from '../../../../../assets/svg/caretdown1.svg';
import InputMask from 'react-input-mask';
import kb from '../../../../../assets/svg/notFoundCard.svg';

const SendMoney = () => {
  const [sum, setSum] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [validity, setValidity] = useState('');
  const [cvc, setCvc] = useState('');
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
          <div className="send-money-container-content-input-card-input">
            <div className="send-money-container-content-input-card-input-svg"
                 style={{ backgroundImage: `url(${kb})` }} />
            <InputMask
              placeholder="0000 0000 0000 0000"
              maskChar={null}
              mask="9999 9999 9999 9999"
              className="send-money-container-content-input-card-input-input"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
            />
            <label className="send-money-container-content-input-card-input-label">Номер карты</label>
          </div>
          <div className="send-money-container-content-input-card-validity">
            <InputMask
              maskChar={null}
              mask="99/99"
              placeholder="00/00"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
              className="send-money-container-content-input-card-validity-input"
            />
            <label className="send-money-container-content-input-card-validity-label">Срок действия</label>
          </div>
          <div className="send-money-container-content-input-card-validity send-money-container-content-input-card-cvc "
               style={{ right: '200px' }}>
            <InputMask
              maskChar={null}
              mask="999"
              placeholder="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="send-money-container-content-input-card-validity-input"
            />
            {/*<label className="send-money-container-content-input-card-validity-label">CVC</label>*/}
          </div>
          <div className="send-money-container-content-input-card-close" onClick={() => {
            setValidity('');
            setCardNum('');
          }}>
            <Close2 />
          </div>
          <div className="send-money-container-content-input-card-collapse">
            <Caretdown />
          </div>
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