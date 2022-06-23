import React, { useState } from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import './telephone.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import wsm from '../../../../../assets/images/wsm.png';
import card from '../../../../../assets/images/card.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import './telephone.scss';
import '../translate.scss'
import { Link } from 'react-router-dom';

const Card = () => {
  const [click, setClick] = useState(false);
  const [cclick, settClick] = useState(false);
  const [summ, setSumm] = useState('');
  const [visible, setVisible] = useState('');


  const formatSumm = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) {
      return phoneNumber;
    }
    if (phoneNumberLength === 4) {
      return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
    }
    if (phoneNumberLength < 6) {
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
    }
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength === 7) {
      return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)}`;
    }
    if (phoneNumberLength < 9) {
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5)} `;
    }
    // return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)}  `;
  };

  const handleSumm = (e) => {
    const formatSummNumber = formatSumm(e.target.value);
    setVisible(formatSummNumber);
    setSumm(e.target.value.replace(/ /g, ''));
  };

  const remove = () => {
    setVisible('');
    setSumm('');
  };

  const score = 10000;


  return (<div>
    <div className="card__tranlate">
      {/*<Navbar />*/}

      <div className="container__translate">

        {/*translate__padd*/}
        <div className="translate__padd translate__padd--wrapper">

          {/*translate__back*/}
          <div className="translate__back">
            <Link to="/wallet/payment/trans"><span><ChevronLeftIcon /></span> Назад</Link>
          </div>

          {/*translate__mont*/}
          <div className="translate__mont">
            <h2 className='card__title-top'>Перевести деньги</h2>
          </div>
          
          <h2 className="translate__title-where">Откуда</h2>

          {/*card__otk-select*/}
          <div className="card__otk-select">
            <div className="card__otk-sel" onClick={() => {
              setClick(!click);
              settClick(false)
            }}>
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
            {click && <div className="card__otk-content card__otk-content-open">
              <ul className="card__otk-list">
                <li className='card__otk-item'>
                  <img src={wsm} alt="png" width={44}/>
                  <div>
                    <h4>Kapital Bank TGF  ** 6777</h4>
                    <p>2 426 789 сум</p>
                  </div>
                </li>
                <li className='card__otk-item'>
                  <img src={card} alt="png" width={44}/>
                  <div>
                    <h4>Kapital Bank TGF  ** 6777</h4>
                    <p>2 426 789 сум</p>
                  </div>
                </li>
                <li className='card__otk-item'>
                  <img src={wsm} alt="png" width={44}/>
                  <div>
                    <h4>Kapital Bank TGF  ** 6777</h4>
                    <p>2 426 789 сум</p>
                  </div>
                </li>
              </ul>
            </div>}

          </div>


          {/*translate__mont-title*/}
          <div className="translate__mont-title">
            <h2>Куда</h2>
            <p><PersonIcon /> Все получатели</p>
          </div>

          {/*card__otk-select*/}
          <div className="card__otk-select card__otk-cardNumber">

            <div className="card__otk-sel" onClick={() => {
              settClick(!cclick)
              setClick(false)
            }}>
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
            {cclick && <div className="card__otk-content card__otk-content-open">
              <ul className="card__otk-list">
                <li className='card__otk-item'>
                  <img src={wsm} alt="png" width={44}/>
                  <div>
                    <h4>Kapital Bank TGF  ** 6777</h4>
                    <p>2 426 789 сум</p>
                  </div>
                </li>
                <li className='card__otk-item'>
                  <img src={card} alt="png" width={44}/>
                  <div>
                    <h4>Kapital Bank TGF  ** 6777</h4>
                    <p>2 426 789 сум</p>
                  </div>
                </li>
                <li className='card__otk-item'>
                  <img src={wsm} alt="png" width={44}/>
                  <div>
                    <h4>Kapital Bank TGF  ** 6777</h4>
                    <p>2 426 789 сум</p>
                  </div>
                </li>
              </ul>
            </div>}
          </div>
          <div className="card__otk-content card__otk-content-phone">
            <div className="card__otk-content-phone-flex">
              <input
                style={summ > score ? { color: '#F5095E' } : { color: '#130F26' }}
                value={visible}
                onChange={(e) => handleSumm(e)}
                type="text"
                className="card__inpit-erors" id='input-erors'/>
              <label htmlFor='input-erors' className={`card__ card__labale-wsp ${visible.length ? 'open-wsp' : ''}`}>Сумма WSM</label>
              <div className="card__close-cirsle" onClick={() => remove()}><CloseIcon /></div>
            </div>
            {Number(summ) < Number(score) ?
              <p>Комиссия 0.3% или {((Number(summ) / 100) * 0.3).toFixed(2)} UZS</p> : null}
            {summ > score && <span className="errors__card-span">На вашем счету не достаточно средств</span>}
          </div>

          {/*card__message-user*/}
          <div className="card__message-user">
            <input type="text" placeholder="Сообщение получателю" />
          </div>


          {/*Buttos Bottom*/}
          <div className="card__buttos-two">
            <Link to="/wallet/payment/trans" className="card__btn card__btn-otm">Отмена</Link>
            <a href="#" className="card__btn card__btn-per">Перевести {summ.length > 0 ? visible : 0} WMS</a>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default Card;