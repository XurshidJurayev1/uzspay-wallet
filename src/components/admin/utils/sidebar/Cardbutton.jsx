import React from 'react';
import {ReactComponent as Plyus} from "../../../../assets/svg/plyus.svg" ;
const Cardbutton = (props) => {
    return (
        <div>
            <div className="sidebar__button-card">
                <button className="sidebar__button-btn">
                    <div className="sidebar__button-circle">
                    <Plyus className="sidebar__plyu-icon"/> 
                    </div>
                    {props.title}
                </button>
            </div>
        </div>
    );
}

export default Cardbutton;
