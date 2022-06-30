import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import wsm from '../../../../../assets/images/wsm.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './cardnumber.scss';
import '../telephone.scss';
import '../translate.scss';
import { Link } from 'react-router-dom';
import img1 from '../../../../../assets/images/Ellipse 17.png';
import CloseIcon from '@mui/icons-material/Close';
import wmsIcon from '../../../../../assets/images/wms icon.png';
import kapital from '../../../../../assets/images/Kapitalbank-Logo_Wh 1.png';

const TelephoneNumber = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [activeCard, setActiveCard] = useState('');
  const [selected, setSelected] = useState('');
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [summ, setSumm] = useState('');


  const handleInput = (e) => {
    const formaterPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formaterPhoneNumber);
  };
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) {
      return phoneNumber;
    }
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

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
    setSumm(formatSummNumber);
  };


  const fakeApi = [{
    img: img1,
    name: 'Арсений морозов',
    phone: '+998 (97) 733-30-06',
    banks: [{ bank: 'WebSum', icon: wmsIcon, nm: 'Arseniy M.' }, {
      bank: 'Kapital Bank', icon: kapital, nm: 'Arseniy M. TGF',
    }],
  }, {
    img: img1,
    name: 'Дмитрий Лебедев',
    phone: '+998 (97) 733-30-06',
    banks: [{ bank: 'WebSum', icon: wmsIcon, nm: 'Arseniy M.' }, {
      bank: 'Kapital Bank', icon: kapital, nm: 'Arseniy M. TGF',
    }],

  }, {
    img: img1,
    name: 'Глеб Комаров',
    phone: '+998 (97) 733-30-06',
    banks: [{ bank: 'WebSum', icon: wmsIcon, nm: 'Arseniy M.' }, {
      bank: 'Kapital Bank', icon: kapital, nm: 'Arseniy M. TGF',
    }],
  }];

  const selectToWhom = (item) => {
    setClick2(false);
    setSelected(item);
  };


  // const kamuInputRef = React.useRef();
  //
  //
  // useEffect(() => {
  //   if (selected || !click2) kamuInputRef.current.classList.remove('translate__kamu-input--responsive');
  //
  // }, [kamuInputRef]);


  const handleKamuInput = (evt) => {
    setClick2(true);
    // kamuInputRef.current.classList.add('translate__kamu-input--responsive');
  };


  return (<div>
    <div className="translate">
      {/*<Navbar />*/}
      <div className="container__translate">
        <div style={click || click2 ? {
          position: 'absolute', top: '0', left: '0', minHeight: '100vh', minWidth: '100vw', background: 'transparent',
        } : null} onClick={() => {
          setClick(false);
          setClick2(false);
        }} />
        <div className="translate__padd translate__padd--responsive">
          <div className="translate__back translate__back--responsive">
            <div className="translate__back translate__back--responsive back_btn_mobile">
              {click2 ? <p onClick={() => setClick2(false)} className="translate__back__otmena">
                Отмена
              </p> : <Link to="/wallet/payment/trans"><span><ChevronLeftIcon /></span>
                <div className="translate__back--txt">Назад</div>
              </Link>}
            </div>
            <div className="translate__back translate__back--responsive back_btn_desktop">
              <Link to="/wallet/payment/trans"><span><ChevronLeftIcon /></span>
                <div className="translate__back--txt">Назад</div>
              </Link>
            </div>
            <h2 className="translate__back--title">По номеру телефона
            </h2>
          </div>
          <div className="translate__mont translate__mont--responsive">
            <h2>Перевести деньги</h2>
          </div>
          <div className="translate__otk">
            <h3 className="translate__title-where--responsive">Откуда</h3>

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
                <div className="card__otk-icon" style={click ? { transform: 'rotate(90deg)' } : null}>
                  <ChevronRightIcon />
                </div>
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
          </div>
          <div
            className="translate__kamu translate__kamu--responsive"

          >
            <h3>Кому</h3>
            <div
              // ref={kamuInputRef}
              className={`translate__kamu-input ${click2 && 'translate__kamu-input--responsive'}`}
            >
              {/*<input onChange={e => handleInput(e)} value={inputValue} type="text" />*/}
              {selected ?
                <div className="translate__kamu-input-select-option" style={{ backgroundColor: 'transparent' }}>
                  <div className="translate__kamu-input-select-option-avatar"
                       style={{ backgroundImage: `url(${selected.img})` }} />
                  <div className="translate__kamu-input-select-option-people">
                    <p>{selected.name}</p>
                    <span>{selected.phone}</span>
                  </div>
                  <div className="translate__kamu-input-select-option-back" onClick={() => setSelected('')}>
                    <CloseIcon />
                  </div>
                </div> : <>
                  <input
                    type="text"
                    className="translate__kamu-input"
                    onChange={e => handleInput(e)}
                    value={inputValue}
                    onClick={handleKamuInput}
                  />

                  <label className={`translate__kamu-plac ${inputValue.length ? 'written' : ''}`}>Номер телефона или
                    имя</label>
                </>}

              <div className="translate__kamu-input-select" style={click2 ? { display: 'block' } : { display: 'none' }}
                   onBlur={() => setClick2(false)}>
                {fakeApi.map((item, idx) => {
                  return (<div className="translate__kamu-input-select-option"
                               key={idx}
                               onClick={() => selectToWhom(item)}>
                    <div className="translate__kamu-input-select-option-avatar"
                         style={{ backgroundImage: `url(${item.img})` }} />
                    <div className="translate__kamu-input-select-option-people">
                      <p>{item.name}</p>
                      <span>{item.phone}</span>
                    </div>
                  </div>);
                })}
              </div>
            </div>
            {selected && <div className="translate__kamu-selected">
              {selected.banks.map((bank, idx) => {
                return (<div
                  className={activeCard === idx ? 'translate__kamu-selected-cards-active' : 'translate__kamu-selected-cards'}
                  onClick={() => setActiveCard(idx)}>
                  <div className="translate__kamu-selected-cards-icon"
                       style={{ backgroundImage: `url(${bank.icon})` }} />
                  <p>
                    {bank.bank}
                  </p>
                  <span>
                          {bank.nm}
                        </span>
                </div>);
              })}
            </div>}
          </div>
          <div className="translate__bank">
            <input

              type="text"
              className="translate__bank-input"
              onChange={e => handleSumm(e)}
              value={summ}

            />
            <label className={summ.length > 0 ? 'translate__bank-place-active' : 'translate__bank-place'}>
              Сумма WMS
            </label>
            {summ.length > 0 ? <p>Комиссия 0.3% или {((Number(summ) / 100) * 0.3).toFixed(2)} UZS</p> :

              <p>Размер комиссии будет уточнен после ввода реквизитов платежа.</p>}
          </div>
          <div style={{
            marginTop: '60px',
          }}>
            <div className="translate__bank">
              <input
                type="text"
                className="translate__bank-input"
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
              <label className={message.length > 0 ? 'translate__bank-place-active' : 'translate__bank-place'}>Сообщение
                получателю</label>

            </div>
            <div className="card__buttos-two telephone__btnCollection">
              <Link to="/wallet/payment/trans" className="card__btn card__btn-otm">Отмена</Link>
              <a href="#" className="card__btn card__btn-per">Перевести {summ.length > 0 ? summ : 0} WMS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default TelephoneNumber;
