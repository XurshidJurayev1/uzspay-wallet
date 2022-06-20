import React from 'react';
// import Navbar from '../../utils/navbar/Navbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './translate.scss';
import './TelephoneNumber/cardnumber.scss';
import Cards from './cards/Cards';
import Inputrans from './Inputrans';
import { Link } from 'react-router-dom';
import { ReactComponent as svg1 } from '../../../../assets/svg/phone 2.svg';
import { ReactComponent as svg2 } from '../../../../assets/svg/creditCard.svg';
import { ReactComponent as svg3 } from '../../../../assets/svg/houseline 2.svg';

const Transfer = () => {
  return (
    <div className="translate">
      {/*<Navbar />*/}
      <div className="container__translate">
        <div className="translate__padd">
          <div className="translate__back">
            <Link to="/wallet"><span><ChevronLeftIcon /></span> Назад</Link>
          </div>
          <div className="translate__mont">
            <h2>Перевести деньги</h2>
            <Inputrans />
            <div className="translate_row">
              <div className="row">
                <div className="col-md-4">
                  <Cards link="/wallet/trans/phone" title="По номеру телефона" svg={svg1} />
                </div>
                <div className="col-md-4">
                  <Cards link="/wallet/trans/card" title={`По номеру\n                карты`} svg={svg2} />
                </div>
                <div className="col-md-4">
                  <Cards link="/wallet/trans/fill" title="Между своими картами и счетами" svg={svg3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
