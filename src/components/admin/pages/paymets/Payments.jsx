import React from 'react';
import Navbar from '../../utils/navbar/Navbar';
import Sidebar from '../../utils/sidebar/Sidebar';
import Favorite from '../../utils/sidebar/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import "./payments.scss";

import Maincard from '../main/mainIndex/maincard/Maincard';
import Categroys from './category/Categroys';
import Recent from '../../utils/recent/Recent';
import Lastbutton from '../../utils/buttons/Lastbutton';

const Payments = () => {
    const text = "Создать шаблон или автоплатеж"
    const placholder = "Имя, название или номер телефона"
    return (
        <div>
            <Navbar />
            <div className="payments">
                <div className="payments__sidebar">
                    <Sidebar title={text} favorite={[<Favorite />]} />
                </div>
                <div className="payments__main">
                    <div className="container__main">
                        <form action="" className="form__main">
                            <button className="form__search_btn">
                                <SearchIcon />
                            </button>
                            <input type="search" className="form__corntrol" placeholder={placholder} />
                        </form>

                        <div className="mt-4 payments__card-main">
                            <div className="row">
                                <div className="col-md-3">
                                    <Maincard />
                                </div>
                                <div className="col-md-3">
                                    <Maincard />
                                </div>
                                <div className="col-md-3">
                                    <Maincard />
                                </div>
                                <div className="col-md-3">
                                    <Maincard />
                                </div>
                            </div>
                        </div>
                        <div className="payments__servises">
                            <div className="payments__servises-title">
                                <h2>Услуги</h2>
                                <a href="javoscrptvoid">Все категории</a>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mt-3">
                                    <Categroys />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <Categroys />
                                </div> 
                                <div className="col-md-6 mt-3">
                                    <Categroys />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <Categroys />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <Categroys />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <Categroys />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                          <Recent />
                        </div>
                        <div className="mt-5">
                            <Lastbutton />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Payments;
