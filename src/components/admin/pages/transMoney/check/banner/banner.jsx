import React from 'react';
import './banner.scss';
import img from '../../../../../../assets/images/banner_bg.jpg';


function Banner() {
  return (<div className="banner__card">
    <div className="banner__inner">
      <h2>Ещё не зарегестрировались?</h2>
      <p>Зарегестрируйте свой счёт WSM и используйте все возможности сервиса.</p>
      <button className="card__btn card__btn-per banner__btn">Открыть счёт WSM</button>
    </div>
    <img className="banner__bg" src={img} alt="" />
  </div>);
}


export default Banner;