import React, { useState } from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import wsm from '../../../../../assets/images/wsm.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './cardnumber.scss';
import { Link } from 'react-router-dom';
import img1 from '../../../../../assets/images/Ellipse 17.png';


const CardNumber = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [selected, setSelected] = useState('');
  const [inputValue, setInputValue] = useState('');
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


  const fakeApi = [{
    img: img1, name: 'Арсений морозов', phone: '+998 (97) 733-30-06',
  }, {
    img: img1, name: 'Дмитрий Лебедев', phone: '+998 (97) 733-30-06',
  }, {
    img: img1, name: 'Глеб Комаров', phone: '+998 (97) 733-30-06',
  }, // {
    //   img: '',
    //   name: '',
    //   phone: '',
    // },
  ];
  console.log(selected);

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
          <div className="translate__kamu" onBlur={() => setClick2(false)}>
            <h3>Кому</h3>
            <div className="translate__kamu-input">
              {/*<input onChange={e => handleInput(e)} value={inputValue} type="text" />*/}
              {selected ? <div>
                wwqeqweqw
              </div> : <input
                type="text"
                className="translate__kamu-input"
                onChange={e => handleInput(e)}
                value={inputValue}
                onClick={() => setClick2(true)}
              />}
              {inputValue.length > 0 ? null : <label className="translate__kamu-plac">Номер телефона или мя</label>}
              <div className="translate__kamu-input-select" style={click2 ? { display: 'block' } : { display: 'none' }}>
                {fakeApi.map((item, idx) => {
                  return (
                    <div className="translate__kamu-input-select-option" key={idx} onClick={() => setSelected(item)}>
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
          </div>
          <div className="translate__bank">
            <div className="translate__bank-box">
              <div className="translate__bank-box-icon">

              </div>
              <h4>WebSum</h4>
              <h5>Arseniy M.</h5>
            </div>
            <div className="translate__bank-box"></div>
          </div>
          <div className="translate__kamu">

          </div>
          <div className="translate__kamu">

          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default CardNumber;
