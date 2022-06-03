import React from 'react';
import Cardbutton from './Cardbutton';
import "./sidebar.scss";

const Sidebar = (props) => {
    return (
        <div className="sidebar__b">
            <div className="sidebar">
                <div className="sidebar__side">
                    {props.favorite.map((object, i) => {
                        return <div key={i}>
                            {object}
                        </div>
                    })}
                </div>
            </div>
            <Cardbutton title={props.title}  />
        </div>
    );
}

export default Sidebar;
