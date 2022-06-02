import React from 'react';
import vector from "../../../../assets/svg/Vector.svg";
import vector2 from "../../../../assets/svg/send_1.svg";
import uzb from '../../../../assets/images/uzb_Ra.png'
import card from '../../../../assets/images/card.png'
import down from '../../../../assets/images/caretdown 1.png'
import plyus from '../../../../assets/images/plyus.png'
import "./sidebar.scss";
const Sidebar = () => {

    return (
        <div className="sidebar__b">
            <div className="sidebar">
                <div className="sidebar__side">
                    <div className="sidebar__chek">
                        <div className="sidebar__chek-balance">
                            <p className="sidebar__chek-count"> Баланс счета <span>**5667</span></p>
                            <p className="sidebar__chek-number">5 459 802 <span>wsm</span></p>
                        </div>
                        <div className="sidebar__chek-buttons">
                            <a className="sidebar__chek-buttons-up sidebar__chek-buttons-up" href="javascriptVoid"><img src={vector} alt="svg" /> Пополнить</a>
                            <a className="sidebar__chek-buttons-up sidebar__chek-buttons-up-active" href="javascriptVoid"><img src={vector2} alt="svg" /> Перевести</a>
                        </div>
                    </div>
                    <div className="sidebar__acardion">
                        <h2>Мои карты</h2>
                        <div className="sidebar__acardion-item">
                            <div className="sidebar__acardion-title">
                                <div className="sidebar__acardion-imgText">
                                    <div className="sidebar__acardion-img">
                                        <img src={uzb} alt="png" />
                                    </div>
                                    <div className="sidebar__acardion-text">
                                        <span className="sidebar__acardion-text_s">3 426 789 сум</span>
                                        <span className="sidebar__acardion-text_p">Сумовые карты</span>
                                    </div>
                                </div>
                                <div className="sidebar__acardion-icon">
                                    <img src={down} alt="png" />
                                </div>
                            </div>
                            <div className="sidebar__acardion-content">
                                <div className="sidebar__acardion-content-b">
                                    <span className="sidebar__acardion-content_s">2 426 789 сум</span>
                                    <span className="sidebar__acardion-content_p">Kapital Bank TGF</span>
                                </div>
                                <div className="sidebar__acardion-content-img">
                                    <img src={card} alt="png" />
                                </div>
                            </div>
                            <div className="sidebar__acardion-content">
                                <div className="sidebar__acardion-content-b">
                                    <span className="sidebar__acardion-content_s">2 426 789 сум</span>
                                    <span className="sidebar__acardion-content_p">Kapital Bank TGF</span>
                                </div>
                                <div className="sidebar__acardion-content-img">
                                    <img src={card} alt="png" />
                                </div>
                            </div>
                            <div className="sidebar__acardion-content">
                                <div className="sidebar__acardion-content-b">
                                    <span className="sidebar__acardion-content_s">2 426 789 сум</span>
                                    <span className="sidebar__acardion-content_p">Kapital Bank TGF</span>
                                </div>
                                <div className="sidebar__acardion-content-img">
                                    <img src={card} alt="png" />
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__acardion-item">
                            <div className="sidebar__acardion-title">
                                <div className="sidebar__acardion-imgText">
                                    <div className="sidebar__acardion-img">
                                        <img src={uzb} alt="png" />
                                    </div>
                                    <div className="sidebar__acardion-text">
                                        <span className="sidebar__acardion-text_s">3 426 789 сум</span>
                                        <span className="sidebar__acardion-text_p">Сумовые карты</span>
                                    </div>
                                </div>
                                <div className="sidebar__acardion-icon">
                                    <img src={down} alt="png" />
                                </div>
                            </div>
                            <div className="sidebar__acardion-content">
                                <div className="sidebar__acardion-content-b">
                                    <span className="sidebar__acardion-content_s">2 426 789 сум</span>
                                    <span className="sidebar__acardion-content_p">Kapital Bank TGF</span>
                                </div>
                                <div className="sidebar__acardion-content-img">
                                    <img src={card} alt="png" />
                                </div>
                            </div>
                            <div className="sidebar__acardion-content">
                                <div className="sidebar__acardion-content-b">
                                    <span className="sidebar__acardion-content_s">2 426 789 сум</span>
                                    <span className="sidebar__acardion-content_p">Kapital Bank TGF</span>
                                </div>
                                <div className="sidebar__acardion-content-img">
                                    <img src={card} alt="png" />
                                </div>
                            </div>
                            <div className="sidebar__acardion-content">
                                <div className="sidebar__acardion-content-b">
                                    <span className="sidebar__acardion-content_s">2 426 789 сум</span>
                                    <span className="sidebar__acardion-content_p">Kapital Bank TGF</span>
                                </div>
                                <div className="sidebar__acardion-content-img">
                                    <img src={card} alt="png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="sidebar__button-card">
                <button className="sidebar__button-btn">
                    <img src={plyus} alt="png" />
                    Добавить карту
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
