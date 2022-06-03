import React from 'react';
import uzb from '../../../../assets/images/uzb_Ra.png'
import card from '../../../../assets/images/card.png'
import down from '../../../../assets/images/caretdown 1.png'
const Accardion = () => {
    return (
        <div>
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
                    <div className="sidebar__acardion-text_contetnt">
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
    );
}

export default Accardion;
