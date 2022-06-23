import React, { useState } from 'react';
import './score.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import wsm from '../../../../../assets/images/wsm.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './score.scss';
import { Link } from 'react-router-dom';

const Score = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="score">
        {/*<Navbar/>*/}
        <div className="container__translate">
          <div className="translate__padd">
            {/*translate__back*/}
            <div className="translate__back">
              <Link to="/wallet/trans/fill"><span><ChevronLeftIcon /></span> Назад</Link>
            </div>

            {/*translate__mont*/}
            <div className="translate__mont">
              <h2>Пополнить счёт WSM через карту</h2>
            </div>


            {/*translate__mont-title*/}
            <div className="translate__mont-title">
              <h2 className="tranlate-mont-title-h">С карты</h2>
            </div>

            {/*card__otk-select*/}
            <div className="score__input-b">
              <input type="text" className="score__input"  />
              <label className="score__card-number">Номер карты</label>
              <div className="card__otk-icon-score">
                <ChevronRightIcon />
              </div>
            </div>

            {/*translate__mont-title*/}
            <div className="score__title__po">
              <h2>Сумма пополнения</h2>
            </div>

            {/*score__summag*/}
            <div className="score__summa">
              <input type="text" placeholder="Сумма WSM" className="score__summ-inout" />
              <span>1 WSM = 1 сум (UZS)</span>
            </div>

            {/*Buttos Bottom*/}
            <div className="card__buttos-two">
              <a href="#" className="card__btn card__btn-otm">Отмена</a>
              <a href="#" className="card__btn card__btn-per">Пополнить</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;