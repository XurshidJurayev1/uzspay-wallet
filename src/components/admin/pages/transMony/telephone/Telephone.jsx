import React from 'react';
import './Telephone.scss';
import Navbar from '../../../utils/navbar/Navbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';


const Telephone = () => {
  return (
    <div className="phone">
      <Navbar />
      <div className="phone_number">
        <div className="phone_number_back">
          <Link to="/trans"><span><ChevronLeftIcon /></span> Back </Link>
        </div>
        <h3>
          Перевести деньги
        </h3>
        <div className="phone_number_content">

        </div>
      </div>
    </div>
  );
};

export default Telephone;