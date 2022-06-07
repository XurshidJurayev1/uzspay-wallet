import React from 'react';
import Navbar from '../../../utils/navbar/Navbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "../translate.scss";
import Inputrans from '../Inputrans';
const Cardnomber = () => {
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
                            <Inputrans   />
                        </div>
                        <div className="translate__kamu">
                            <h3>Кому</h3>
                            <Inputrans   />
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
                            <Inputrans   />
                        </div>
                        <div className="translate__kamu">
                            <Inputrans   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardnomber;
