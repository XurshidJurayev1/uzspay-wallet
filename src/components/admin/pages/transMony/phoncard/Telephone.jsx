import React, { useState } from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import style from './telephone.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import wsm from '../../../../../assets/images/wsm.png';
import card from '../../../../../assets/images/card.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import './telephone.scss';

const Telephone = () => {
  const [click, setClick] = useState(false);
  const [cclick, settClick] = useState(false);
  return (
    <div>
      <div className="card__tranlate">
        <Navbar />

        <div className="container__translate">

          {/*translate__padd*/}
          <div className="translate__padd">

            {/*translate__back*/}
            <div className="translate__back">
              <a href="javscriptVoid"><span><ChevronLeftIcon /></span> Назад</a>
            </div>

            {/*translate__mont*/}
            <div className="translate__mont">
              <h2>Перевести деньги</h2>
            </div>

            {/*card__otk-select*/}
            <div className="card__otk-select">
              <div className="card__otk-sel" onClick={() => setClick(!click)}>
                <div className="card__otk">
                  <div className="card__otk-img">
                    <img src={wsm} alt="png" />
                  </div>
                  <div className="card__otk-text">
                    <span className="card__otk-sch">Счёт WSM</span>
                    <span className="card__otk-num">457 000</span>
                  </div>
                </div>
                <div className="card__otk-icon">
                  <ChevronRightIcon />
                </div>
              </div>
              {click && <div className="card__otk-content">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>}

            </div>


            {/*translate__mont-title*/}
            <div className="translate__mont-title">
              <h2>Куда</h2>
              <p><PersonIcon /> Все получатели</p>
            </div>

            {/*card__otk-select*/}
            <div className="card__otk-select">

              <div className="card__otk-sel" onClick={() => settClick(!cclick)}>
                <div className="card__otk">
                  <div className="card__otk-img">
                    <img src={card} alt="png" />
                  </div>
                  <div className="card__otk-text">
                    <span className="card__otk-sch">Номер карты</span>
                    <span className="card__otk-num">8600 56** **** 6777</span>
                  </div>
                </div>
                <div className="card__otk-icon">
                  <ChevronRightIcon />
                </div>
              </div>
              <div className="card__input-close__time">
                {cclick && <div className="card__otk-content card__otk-content-phone">
                  <div className="card__otk-content-phone-flex">
                    <input type="text" className="card__inpit-erors" />
                    <label className="card__labale-wsp">Сумма WSM</label>
                    <div className="card__close-cirsle" onClick={() => settClick(false)}><CloseIcon /></div>
                  </div>
                  <span className="errors__card-span">На вашем счету не достаточно средств</span>
                </div>}
              </div>
            </div>

            {/*card__message-user*/}
            <div className="card__message-user">
              <input type="text" placeholder="Сообщение получателю" />
            </div>


            {/*Buttos Bottom*/}
            <div className="card__buttos-two">
              <a href="#" className="card__btn card__btn-otm">Отмена</a>
              <a href="#" className="card__btn card__btn-per">Перевести 80 000 WMS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telephone;