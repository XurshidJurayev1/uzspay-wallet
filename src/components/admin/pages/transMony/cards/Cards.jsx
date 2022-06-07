import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import style from './qwerty.module.scss';

const Cards = () => {
  return (
    <div className="translate__card">
      <h3>По номеру телефона</h3>
      <div className="local__phone">
        <LocalPhoneIcon />
      </div>
    </div>
  );
};

export default Cards;
