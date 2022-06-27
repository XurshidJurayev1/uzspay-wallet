import React from 'react';
import './check.scss';
import '../translate.scss';
import { ReactComponent as DownloadSvg } from '../../../../../assets/svg/download 2.svg';
import CardImg from '../../../../../assets/images/card.png';
import { ReactComponent as SendSvg } from '../../../../../assets/svg/send_1.svg';
import { ReactComponent as CopySvg } from '../../../../../assets/svg/copy.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as ReceiptSvg } from '../../../../../assets/svg/receipt.svg';
import Banner from './banner/banner';


const Check = () => {
  return (
    <div className="card__tranlate">
      <div className="container__translate">
        <div className="container__translate">
          <div className="translate__padd translate__padd--wrapper translate__padd--check">
            <div className="check__card">
              <p className="check__time">26 мая 2022 <sapn>•</sapn> 14:57</p>
              <h2 className="check__title ">Деньги успешно поступили Ахмеду!</h2>
              <ul className="check__list">
                <li className="check__item">
                  <div className="check__item--left">
                    <div className="check__svg"><DownloadSvg /></div>
                    <p>Отправитель</p>
                  </div>
                  <div className="check__item--right">
                    <img src={CardImg} alt="" />
                    <p className="check__card-number">8600 56** **** 6777</p>
                    <p className="check__card-number--responsive">** 6777</p>
                  </div>
                </li>
                <li className="check__item">
                  <div className="check__item--left">
                    <div className="check__svg"><SendSvg /></div>
                    <p>Получатель</p>
                  </div>
                  <div className="check__item--right check__item--send">
                    <h4>Ахмед </h4>
                    <p>+998 (97) 733-30-06</p>
                  </div>
                </li>
                <li className="check__item">
                  <div className="check__item--left">
                    <p>Сумма:</p>
                  </div>
                  <div className="check__item--right check__item--sum">
                    <p>1 000 000.00 сум</p>
                    <p>Комиссия: 1 000 сум</p>
                  </div>
                </li>
                <li className="check__item">
                  <div className="check__item--left">
                    <p>Номер транзакции:</p>
                  </div>
                  <div className="check__item--right check__item--num">
                    <p>1677-ew12-7899-98e1</p>
                    <button className="check__svg"><CopySvg /></button>
                  </div>
                </li>
                <li className="check__item">
                  <div className="check__item--left">
                    <p>Дата транзакции:</p>
                  </div>
                  <div className="check__item--right check__item--num">
                    <p className="check__time">26 мая 2022 <sapn>•</sapn> 14:57</p>
                  </div>
                </li>
              </ul>
              <Link className="check__link" to="/wallet/payment/check"> <span
                className="check__svg"><ReceiptSvg /></span>Сохранить квитанцию</Link>
            </div>
            <Link className="check__link" to="/wallet/payment/check">Проблемы с транзакцией?</Link>
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;

