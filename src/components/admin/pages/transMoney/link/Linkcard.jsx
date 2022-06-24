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
          <div className="translate__padd  translate__padd--responsive">

            {/*translate__back*/}
            <div className="translate__back translate__back--responsive">
              <Link to="/wallet/payment/trans/fill">
                <span>
                  <ChevronLeftIcon />
                </span>{" "}
                <div className="translate__back--txt">Назад</div>
              </Link>
              <h2 style={{left: "13%"}} className="translate__back--title">
              Создать ссылку для пополнения
              </h2>
            </div>

            {/*translate__mont*/}
            <div className="translate__mont translate__mont--responsive">
              <h2>Создать ссылку для пополнения WMS счёта</h2>
            </div>


            {/*translate__mont-title*/}
            <div className="translate__mont-title translate__mont-title--responsive">
              <h2 className="translate__title-where translate__title-where--responsive">Укажите сумму</h2>
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

export default Linkcard;