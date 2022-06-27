import React, { useState } from 'react';
import './score.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import wsm from '../../../../../assets/images/wsm.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './score.scss';
import { Link } from 'react-router-dom';

const Score = () => {
  const [click, setClick] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [summ, setSumm] = useState('');

  function handleCardNumber(evt) {
    let value = evt.target.value;
    setCardNumber(value);
  }

  function handleSumm(evt) {
    let value = evt.target.value;
    setSumm(value);
  }

  return (
    <div>
      <div className="score">
        {/*<Navbar/>*/}
        <div className="container__translate">
          <div style={click ? {
            position: 'absolute', top: '0', left: '0', minHeight: '100vh', minWidth: '100vw', background: 'transparent',
          } : null} onClick={() => {
            setClick(false);
          }} />
          <div className="translate__padd translate__padd--responsive">
            {/*translate__back*/}
            <div className="translate__back translate__back--responsive">
              <Link to="/wallet/payment/trans/fill">
                <span>
                  <ChevronLeftIcon />
                </span>{' '}
                <div className="translate__back--txt">Назад</div>
              </Link>
              <h2 style={{ left: '23%' }} className="translate__back--title">
                Пополнить через карту
              </h2>
            </div>

            {/*translate__mont*/}
            <div className="translate__mont translate__mont--responsive">
              <h2>Пополнить счёт WSM через карту</h2>
            </div>

            {/*translate__mont-title*/}
            <div className="translate__mont-title translate__mont-title--responsive">
              <h2 className="translate__title-where translate__title-where--responsive">
                С карты
              </h2>
            </div>

            {/*card__otk-select*/}
            <div className="score__input-b" onClick={() => setClick(!click)}>
              <input
                type="text"
                className="score__input"
                value={cardNumber}
                onChange={handleCardNumber}
              />
              <label
                className={`score__card-number ${
                  cardNumber.length ? 'written' : ''
                }`}
              >
                Номер карты
              </label>
              <div className="card__otk-icon-score">
                <ChevronRightIcon />
              </div>
              {click && <div className="card__otk-content card__otk-content-open">
                <ul className="card__otk-list card__accourdion">
                  <li className="card__otk-item">
                    <img src={wsm} alt="png" width={44} />
                    <div>
                      <h4>Kapital Bank TGF ** 6777</h4>
                      <p>2 426 789 сум</p>
                    </div>
                  </li>
                  <li className="card__otk-item">
                    <img src={wsm} alt="png" width={44} />
                    <div>
                      <h4>Kapital Bank TGF ** 6777</h4>
                      <p>2 426 789 сум</p>
                    </div>
                  </li>
                  <li className="card__otk-item">
                    <img src={wsm} alt="png" width={44} />
                    <div>
                      <h4>Kapital Bank TGF ** 6777</h4>
                      <p>2 426 789 сум</p>
                    </div>
                  </li>
                </ul>
              </div>}
            </div>

            {/*translate__mont-title*/}
            <div className="score__title__po">
              <h2 className="translate__title-where translate__title-where--responsive">
                Сумма пополнения
              </h2>
            </div>

            {/*score__summag*/}
            <div className="score__summa">
              <div className="score__input-b score__summa--b">
                <input
                  type="text"
                  className="score__input"
                  value={summ}
                  onChange={handleSumm}
                />
                <label
                  className={`score__card-number ${
                    summ.length ? 'written' : ''
                  }`}
                >
                  Сумма WSM
                </label>
              </div>
              <span>1 WSM = 1 сум (UZS)</span>
            </div>

            {/*Buttos Bottom*/}
            <div className="card__buttos-two telephone__btnCollection">
              <Link
                to="/wallet/payment/trans/fill"
                className="card__btn card__btn-otm"
              >
                Отмена
              </Link>
              <a href="#" className="card__btn card__btn-per">
                Перевести {summ.length > 0 ? summ : 0} WMS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
