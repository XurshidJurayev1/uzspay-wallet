import React, { useEffect, useState } from 'react';
import logo from '../../../../assets/images/Logo.png' ;
import user from '../../../../assets/images/user.png' ;
import notify from '../../../../assets/svg/notify.svg' ;
import { ReactComponent as Home1 } from '../../../../assets/svg/home 1.svg' ;
import { ReactComponent as Home1Active } from '../../../../assets/svg/home 1-active.svg' ;
import { ReactComponent as Home } from '../../../../assets/svg/home 2.svg' ;
import { ReactComponent as HomeActive } from '../../../../assets/svg/home 2-active.svg' ;
import './navbar.scss';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const [main, setMain] = useState(false);
  const [pay, setPay] = useState(false);

  console.log(window.location);

  useEffect(() => {

    if (window.location.pathname.includes('payment')) {
      setPay(true);
    }
  }, []);

  console.log(window.location.pathname);

  return (
    <div className="mainNavbar">
      <MDBNavbar expand="lg">
        <MDBNavbarBrand href="#">
          <img src={logo} alt="png" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mainNavbar__nav">

            {
              window.location.pathname === '/wallet' ?
                <Link to="/wallet">
                  <MDBNavbarItem active>
                    <MDBNavbarLink><Home1Active className="icon_pay" /> Главная</MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
                :
                <Link to="/wallet">
                  <MDBNavbarItem>
                    <MDBNavbarLink><Home1 className="icon_pay" /> Главная</MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
            }

            {
              window.location.pathname.includes('payment') ?
                <Link to="/wallet/payment">
                  <MDBNavbarItem active>
                    <MDBNavbarLink><HomeActive className="icon_pay" /> Платежи</MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
                :
                <Link to="/wallet/payment">
                  <MDBNavbarItem active>
                    <MDBNavbarLink><Home className="icon_pay" /> Платежи</MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
            }


          </MDBNavbarNav>

          <form className="d-flex mainNavbar__form">
            <div className="mainNavbar__icon">
              <img src={notify} alt="svg" />
            </div>
            <img src={user} alt="png" />
          </form>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
}