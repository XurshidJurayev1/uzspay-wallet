import React from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import style from './telephone.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Telephone = () => {
  return (
    <div>
          <div className="card__tranlate">
              <Navbar />
              <div className="container__translate">
                <div className="translate__back">
                  <a href="javscriptVoid"><span><ChevronLeftIcon /></span>  Назад</a>
                </div>
                <div className="translate__mont">
                  <h2>Перевести деньги</h2>
                </div>

              </div>
          </div>
    </div>
  );
};

export default Telephone;