import React from 'react';
import Navbar from '../../utils/navbar/Navbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "./translate.scss";
import Cards from './cards/Cards'
import Inputrans from './Inputrans';
const Translate = () => {
    return (
        <div className="translate">
            <Navbar />
            <div className="container__translate">
                <div className="translate__padd">
                    <div className="translate__back">
                        <a href="javscriptVoid"><span><ChevronLeftIcon /></span>  Назад</a>
                    </div>
                    <div className="translate__mont">
                        <h2>Перевести деньги</h2>
                        <Inputrans />
                        <div className="translate_row">
                            <div className="row">
                                <div className="col-md-4">
                                    <Cards />
                                </div>
                                <div className="col-md-4">
                                    <Cards />
                                </div>
                                <div className="col-md-4">
                                    <Cards />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Translate;
