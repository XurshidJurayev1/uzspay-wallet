import React from 'react';
import './monycard.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

const Monycard = () => {
  return (
    <div>
      <div className="mony">

        <div className="container__translate">
          <div className="translate__padd">
            {/*translate__back*/}
            <div className="translate__back">
              <Link to="/wallet/payment/trans/fill"><span><ChevronLeftIcon /></span> Назад</Link>
            </div>

            {/*translate__mont*/}
            <div className="translate__mont">
              <h2>Запросить деньги на WMS счёт</h2>
            </div>


            {/*translate__mont-title*/}
            <div className="translate__mont-title">
              <h2 className="tranlate-mont-title-h">У кого запросить?</h2>
            </div>


            {/*mony__spros*/}
            <div className="mony__spros">
              <input type="text" className="mony__pros-input" />
              <label className="mony__card-labale">Номер телефона или имя</label>

            </div>


            {/*translate__mont-title*/}
            <div className="score__title__po score__title__po-mony">
              <h2>Сумма пополнения</h2>
            </div>
            {/*score__summag*/}
            <div className="score__summa">
              <input type="text" placeholder="Сумма WSM" className="score__summ-inout" />
              <span>1 WSM = 1 сум (UZS)</span>
            </div>


            {/*Buttos Bottom*/}
            <div className="card__buttos-two">
              <Link to="/wallet/payment/trans/fill" className="card__btn card__btn-otm">Отмена</Link>
              <a href="#" className="card__btn card__btn-per">Пополнить</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monycard;