import React, { useState } from 'react';
import logo from "../../../../assets/images/Logo.png" ;
import user from "../../../../assets/images/user.png" ;
import notify from "../../../../assets/images/notify.svg" ;
import home1 from "../../../../assets/images/home 1.svg" ;
import home2 from "../../../../assets/images/home 2.svg" ;
import "./navbar.scss";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
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
                            <MDBNavbarLink  href='#'><img src={home1} alt="svg" /> Главная</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'><img src={home2} alt="svg" />  Платежи</MDBNavbarLink>
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