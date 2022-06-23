import React, {useState} from 'react';
import './linkcard.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from 'react-router-dom';

const Linkcard = () => {

  const [summ, setSumm] = useState('');
  const handleSumm = (evt)=>{
    const value = evt.target.value; 
    setSumm(value);
  }
  return (
    <div>
      <div className="link">

        <div className="container__translate">
          <div className="translate__padd">

            {/*translate__back*/}
            <div className="translate__back">
              <Link to="/wallet/payment/trans/fill"><span><ChevronLeftIcon /></span> Назад</Link>
            </div>

            {/*translate__mont*/}
            <div className="translate__mont translate__mont-link">
              <h2>Создать ссылку для пополнения WMS счёта</h2>
            </div>


            {/*translate__mont-title*/}
            <div className="translate__mont-title">
              <h2 className="tranlate-mont-title-h">Укажите сумму</h2>
            </div>


            {/*score__summag*/}
            <div className="score__summa">
            <div className="link__inputCollect">
                  <input
                    type="text"
                    className="translate__kamu-input"
                    value={summ}
                    onChange={handleSumm}
                  />
                
                  <label className={`monyCard__label ${summ.length ? 'written': ''}`}>Сумма WMS</label>
              </div>
              {/* <input type="text" placeholder="Сумма WMS" className="score__summ-inout" /> */}
              <span>1 WSM = 1 сум (UZS)</span>
            </div>

            {/*Buttos Bottom*/}
            <div className="card__buttos-two">
              <Link to="/wallet/payment/trans/fill" className="card__btn card__btn-otm">Отмена</Link>
              <a href="#" className="card__btn card__btn-per"><ContentCopyIcon />Скопировать ссылку на пополнение</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkcard;