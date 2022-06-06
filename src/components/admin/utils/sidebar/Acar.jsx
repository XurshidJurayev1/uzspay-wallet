import React , { useState } from 'react';
import uzb from '../../../../assets/images/uzb_Ra.png'
import card from '../../../../assets/images/card.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Acar = ({title, active, setIsActive}) => {
  
    return (
        <div>
            <div className="sidebar__acardion-item">
                <div className="sidebar__acardion-title" onClick={() => setIsActive(title)}>
                    <div className="sidebar__acardion-imgText">
                        <div className="sidebar__acardion-img">
                            <img src={uzb} alt="png" />
                        </div>
                        <div className="sidebar__acardion-text">
                            <span className="sidebar__acardion-text_s">3 426 789 сум</span>
                            <span className="sidebar__acardion-text_p">Сумовые карты</span>
                        </div>
                    </div>
                    <div className={(active === title ? "sidebar__acardion-icon-active" : "") + " sidebar__acardion-icon"}>
                        <ChevronRightIcon />
                    </div>
                </div>
                <div className={(active === title ? "sidebar__acardion-text_content-show" : "") + " sidebar__acardion-text_content"}>
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
    );
}

export default Acar;
