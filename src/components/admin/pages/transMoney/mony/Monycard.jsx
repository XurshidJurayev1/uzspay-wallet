import React, {useState} from 'react';
import './monycard.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../../../../../assets/images/Ellipse 17.png';
import wmsIcon from '../../../../../assets/images/wms icon.png';
import kapital from '../../../../../assets/images/Kapitalbank-Logo_Wh 1.png';



const Monycard = () => {
  const [selected, setSelected] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [click2, setClick2] = useState(false);
  const [summ, setSumm] = useState('');

  const handleSumm = (evt)=>{
    const value = evt.target.value; 
    setSumm(value);
  }

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

  const handleInput = (e) => {
    const formaterPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formaterPhoneNumber);
  };


  const selectToWhom = (item) => {
    setClick2(false);
    setSelected(item);
  };

  const fakeApi = [{
    img: img1, name: 'Арсений морозов', phone: '+998 (97) 733-30-06',
    banks: [
      { bank: 'WebSum', icon: wmsIcon, nm: 'Arseniy M.' },
      { bank: 'Kapital Bank', icon: kapital, nm: 'Arseniy M. TGF' },
    ],
  }, {
    img: img1, name: 'Дмитрий Лебедев', phone: '+998 (97) 733-30-06', banks: [
      { bank: 'WebSum', icon: wmsIcon, nm: 'Arseniy M.' },
      { bank: 'Kapital Bank', icon: kapital, nm: 'Arseniy M. TGF' },
    ],

  }, {
    img: img1, name: 'Глеб Комаров', phone: '+998 (97) 733-30-06', banks: [
      { bank: 'WebSum', icon: wmsIcon, nm: 'Arseniy M.' },
      { bank: 'Kapital Bank', icon: kapital, nm: 'Arseniy M. TGF' },
    ],
  }
  ];
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
            {/* <div className="mony__spros">
              <input type="text" className="mony__pros-input" />
              <label className="mony__card-labale">Номер телефона или имя</label>

            </div> */}
            <div className="monyCard__inputCollect">
            {selected ?
                <div onBlur={()=>setClick2(false)} className="translate__kamu-input-select-option" style={{ backgroundColor: 'transparent' }}>
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
                
                  <label className={`monyCard__label ${inputValue.length ? 'written': ''}`}>Номер телефона или имя</label>
                </>
              }
            </div>
            
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


            {/*translate__mont-title*/}
            <div className="score__title__po score__title__po-mony">
              <h2>Сумма пополнения</h2>
            </div>
            {/*score__summag*/}
            <div className="score__summa">
            <div className="monyCard__inputCollect">
                  <input
                    type="text"
                    className="translate__kamu-input"
                    value={summ}
                    onChange={handleSumm}
                  />
                
                  <label className={`monyCard__label ${summ.length ? 'written': ''}`}>Сумма WSM</label>
                </div>
              {/* <input type="text" placeholder="Сумма WSM" className="score__summ-inout" /> */}
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