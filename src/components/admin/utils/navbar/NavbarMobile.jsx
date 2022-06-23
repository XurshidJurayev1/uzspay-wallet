import React, { useEffect } from 'react';
import './navbarMobile.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../../assets/images/Logo.png';
import notify from '../../../../assets/svg/notify.svg';
import main from '../../../../assets/images/user.png';
import { ReactComponent as Main1 } from '../../../../assets/svg/home 1.svg';
import { ReactComponent as MainActive } from '../../../../assets/svg/home 1-active.svg';
import { ReactComponent as Pay1 } from '../../../../assets/svg/home 2.svg';
import { ReactComponent as PayActive } from '../../../../assets/svg/home 2-active.svg';

const NavbarMobile = () => {
  const location = useLocation();

  useEffect(() => {

  }, [location]);
  return (
    <div className="navbar-mobile">
      <div className="navbar-mobile-container">
        <div className="navbar-mobile-container-top">
          <Link to="/wallet">
            <div className="navbar-mobile-container-top-logo" style={{ backgroundImage: `url(${logo})` }} />
          </Link>
          <div className="navbar-mobile-container-top-bell">
            <div style={{ backgroundImage: `url(${notify})` }} />
          </div>
        </div>

        <div className="navbar-mobile-container-bottom">
          <Link to="/wallet">
            <div className="navbar-mobile-container-bottom-item">
              <div className="navbar-mobile-container-bottom-item-svg">
                {
                  window.location.pathname === '/wallet' ?
                    <MainActive />
                    :
                    <Main1 />
                }
              </div>
              <p>
                Главная
              </p>
            </div>
          </Link>
          <Link to="/wallet/payment">
            <div className="navbar-mobile-container-bottom-item">
              <div className="navbar-mobile-container-bottom-item-svg">

                {
                  window.location.pathname.includes('payment') ?
                    <PayActive />
                    :
                    <Pay1 />
                }
              </div>
              <p>
                Платежи
              </p>
            </div>
          </Link>
          <div className="navbar-mobile-container-bottom-item">
            <div className="navbar-mobile-container-bottom-item-user" style={{ backgroundImage: `url(${main})` }} />
            <p>
              Профиль
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;