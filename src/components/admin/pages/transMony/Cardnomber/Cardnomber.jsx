import React, { useState } from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import wsm from "../../../../../assets/images/wsm.png";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./cardnumber.scss";
const Cardnomber = () => {
    const [click, setClick] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const handleInput= (e) => {
        const formaterPhoneNumber = formatPhoneNumber(e.target.value)
        setInputValue(formaterPhoneNumber)
    }
    const formatPhoneNumber = (value) => {
        if(!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, "");
        const phoneNumberLength  = phoneNumber.length
        if(phoneNumberLength < 4) {
            return phoneNumber
        }
        if(phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`
    }

    return (
        <div>
            <div className="translate">
                <Navbar />
                <div className="container__translate">
                    <div className="translate__padd">
                        <div className="translate__back">
                            <a href="javscriptVoid"><span><ChevronLeftIcon /></span>  Назад</a>
                        </div>
                        <div className="translate__mont">
                            <h2>Перевести деньги</h2>
                        </div>
                        <div className="translate__otk">
                            <h3>Откуда</h3>

                            <div className="card__otk-select">
                                <div className="card__otk-sel" onClick={() => setClick(!click)}>
                                    <div className="card__otk">
                                        <div className="card__otk-img">
                                            <img src={wsm} alt="png"/>
                                        </div>
                                        <div className="card__otk-text">
                                            <span className="card__otk-sch">Счёт WSM</span>
                                            <span className="card__otk-num">457 000</span>
                                        </div>
                                    </div>
                                    <div className="card__otk-icon">
                                        <ChevronRightIcon/>
                                    </div>
                                </div >
                                {click &&   <div className="card__otk-content">
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                    </ul>
                                </div>}

                            </div>
                        </div>
                        <div className="translate__kamu">
                            <h3>Кому</h3>
                            <div className="translate__kamu-input">
                                <input onChange={e => handleInput(e)} value={inputValue}  type="text"/>
                                <input type="text" className="translate__kamu-input" />
                                <label className="translate__kamu-plac">Номер телефона или мя</label>
                            </div>
                        </div>
                        <div className="translate__bank">
                            <div className="translate__bank-box">
                                <div className="translate__bank-box-icon">

                                </div>
                                <h4>WebSum</h4>
                                <h5>Arseniy M.</h5>
                            </div>
                            <div className="translate__bank-box"></div>
                        </div>
                        <div className="translate__kamu">

                        </div>
                        <div className="translate__kamu">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardnomber;
