import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
import './qwerty.module.scss'

const Cards = (props) => {
  return (
    <Link to={props.link} className="translate__card translate__card--fill">
      <h3>{props.title}</h3>
      <div className="local__phone">
        <props.svg />
      </div>
    </Link>
  );
};

export default Cards;
