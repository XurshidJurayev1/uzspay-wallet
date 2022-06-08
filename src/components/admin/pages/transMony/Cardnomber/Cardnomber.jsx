import React, { useState } from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import wsm from '../../../../../assets/images/wsm.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './cardnumber.scss';
import { Link } from 'react-router-dom';
import img1 from '../../../../../assets/images/Ellipse 17.png';
import CloseIcon from '@mui/icons-material/Close';
import wmsIcon from '../../../../../assets/images/wms icon.png';
import kapital from '../../../../../assets/images/Kapitalbank-Logo_Wh 1.png';

const CardNumber = () => {
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
    img: img1, name: 'Арсений морозов', phone: '+998 (97) 733-30-06',
    banks: [
      { bank: 'WebSum', icon: wmsIcon },
      { bank: 'Kapital Bank', icon: kapital },
    ],
  }, {
    img: img1, name: 'Дмитрий Лебедев', phone: '+998 (97) 733-30-06', banks: [
      { bank: 'WebSum', icon: wmsIcon },
      { bank: 'Kapital Bank', icon: kapital },
    ],

  }, {
    img: img1, name: 'Глеб Комаров', phone: '+998 (97) 733-30-06', banks: [
      { bank: 'WebSum', icon: wmsIcon },
      { bank: 'Kapital Bank', icon: kapital },
    ],
  }, // {
    //   img: '',
    //   name: '',
    //   phone: '',
    // },
  ];
  console.log(selected);

  const selectToWhom = (item) => {
    setClick2(false);
    setSelected(item);
  };


  return (<div>
    <div className="translate">
      <Navbar />
      <div className="container__translate">
        <div className="translate__padd">
          <div className="translate__back">
            <Link to="/trans"><span><ChevronLeftIcon /></span> Назад</Link>
          </div>
          <div className="translate__mont">
            <h2>Перевести деньги</h2>
          </div>
          <div className="translate__otk">
            <h3>Откуда</h3>

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
              <div className="card__otk-content" style={click ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>

            </div>
          </div>
          <div
            className="translate__kamu"

          >
            <h3>Кому</h3>
            <div
              className="translate__kamu-input"
              // onBlur={() => setClick2(false)}
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
                    onClick={() => setClick2(true)}
                  />
                  {inputValue.length > 0 ? null :
                    <label className="translate__kamu-plac">Номер телефона или имя</label>}
                </>
              }

              <div className="translate__kamu-input-select" style={click2 ? { display: 'block' } : { display: 'none' }}
                   onBlur={() => setClick2(false)}>
                {fakeApi.map((item, idx) => {
                  return (
                    <div className="translate__kamu-input-select-option"
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
            {
              selected &&
              <div className="translate__kamu-selected">
                {
                  selected.banks.map((bank, idx) => {
                    return (
                      <div
                        className={activeCard === idx ? 'translate__kamu-selected-cards-active' : 'translate__kamu-selected-cards'}
                        onClick={() => setActiveCard(idx)}>
                        <div className="translate__kamu-selected-cards-icon"
                             style={{ backgroundImage: `url(${bank.icon})` }} />

                      </div>
                    );
                  })
                }
              </div>
            }
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
            {
              summ.length > 0 ?
                <p>Комиссия 0.3% или {(Number(summ) / 100) * 0.3} UZS</p>
                :

                <p>Размер комиссии будет уточнен после ввода реквизитов платежа.</p>
            }
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
              {message.length > 0 ? null :
                <label className={message.length > 0 ? 'translate__bank-place-active' : 'translate__bank-place'}>Сообщение
                  получателю</label>}

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default CardNumber;
