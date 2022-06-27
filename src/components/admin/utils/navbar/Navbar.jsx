import React, { useEffect, useState } from 'react';
import logo from '../../../../assets/svg/Logo.svg' ;
import user from '../../../../assets/images/user.png' ;
import notify from '../../../../assets/svg/notify.svg' ;
import { ReactComponent as Home1 } from '../../../../assets/svg/home 1.svg' ;
import { ReactComponent as Home1Active } from '../../../../assets/svg/home 1-active.svg' ;
import { ReactComponent as Home } from '../../../../assets/svg/home 2.svg' ;
import { ReactComponent as HomeActive } from '../../../../assets/svg/home 2-active.svg' ;
import './navbar.scss';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [showBasic, setShowBasic] = useState(false);


  useEffect(() => {
    // if (window.location.pathname === '/wallet') {
    //   setMain(true);
    // } else {
    //   setMain(false);
    // }
    //
    // if (window.location.pathname.includes('payment')) {
    //   setPay(true);
    // } else {
    //   setPay(false);
    // }
  }, [location]);

  return (<div className="mainNavbar">
      <MDBNavbar expand="lg">
        <Link to="/wallet">
          <MDBNavbarBrand href="#">
            <img src={logo} alt="png" />
          </MDBNavbarBrand>
        </Link>
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

            {window.location.pathname === '/wallet' ? <Link to="/wallet">
              <MDBNavbarItem active>
                <MDBNavbarLink><Home1Active className="icon_pay" /> Главная</MDBNavbarLink>
              </MDBNavbarItem>
            </Link> : <Link to="/wallet">
              <MDBNavbarItem>
                <MDBNavbarLink className="mainNavbar-link-inner-link"><Home1
                  className="icon_pay" /> Главная</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>}

            {window.location.pathname.includes('payment') ? <Link to="/wallet/payment">
              <MDBNavbarItem active>
                <MDBNavbarLink><HomeActive className="icon_pay" /> Платежи</MDBNavbarLink>
              </MDBNavbarItem>
            </Link> : <Link to="/wallet/payment">
              <MDBNavbarItem>
                <MDBNavbarLink><Home className="icon_pay" /> Платежи</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>}


          </MDBNavbarNav>

          <form className="d-flex mainNavbar__form">
            <div className="mainNavbar__icon">
              <img src={notify} alt="svg" />
            </div>
            <div className="mainNavbar_profile">
              <img src={user} alt="png" />
            </div>
          </form>
        </MDBCollapse>
      </MDBNavbar>
    </div>);
}