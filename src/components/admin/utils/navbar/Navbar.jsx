import React, { useState } from 'react';
import logo from "../../../../assets/images/Logo.png" ;
import user from "../../../../assets/images/user.png" ;
import notify from "../../../../assets/svg/notify.svg" ;
import {ReactComponent as Home1} from "../../../../assets/svg/home 1.svg" ;
import {ReactComponent as Home} from "../../../../assets/svg/home 2.svg" ;
import "./navbar.scss";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <div className="mainNavbar">
            <MDBNavbar expand='lg'>
                <MDBNavbarBrand href='#'>
                    <img src={logo} alt="png" />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mainNavbar__nav'>
                        <MDBNavbarItem active>
                            <MDBNavbarLink  href='#'><Home1  className='icon_pay' /> Главная</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'><Home  className='icon_pay' />  Платежи</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex mainNavbar__form'>
                        <div className='mainNavbar__icon'>
                            <img src={notify} alt="svg" />
                        </div>
                        <img src={user} alt="png" />
                    </form>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    );
}