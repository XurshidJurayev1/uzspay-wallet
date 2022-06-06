import React , { useState } from 'react';
import uzb from '../../../../assets/images/uzb_Ra.png'
import card from '../../../../assets/images/card.png'
import down from '../../../../assets/images/caretdown 1.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Acar from './Acar';
const Accardion = () => {
    const [isActive, setIsActive] = useState("title1");
    
    return (
        <div>
            <div className="sidebar__acardion">
                <h2>Мои карты</h2>
                <Acar title={"title1"} active={isActive} setIsActive={setIsActive} />
                <Acar title={"title2"} active={isActive} setIsActive={setIsActive} />
                <Acar title={"title3"} active={isActive} setIsActive={setIsActive} />
               
            </div>
        </div>
    );
}

export default Accardion;
