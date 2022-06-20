import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import style from './qwerty.module.scss';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (
    <Link to={props.link} className="translate__card">
      <h3>{props.title}</h3>
      <div className="local__phone">
        <props.svg />
      </div>
    </Link>
  );
};

export default Cards;
