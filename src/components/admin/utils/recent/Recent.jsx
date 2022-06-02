import React from 'react';
import Recentmini from './recentmini/Recentmini';
import "./recent.scss";
const Recent = () => {
    return (
        <div className="recent">
            <div className="container__main">
                <h2>Последние операции</h2>

                <div className="recent__time">
                    <div className="recent__t">
                        Сегодня, 18 мая
                    </div>
                    <Recentmini />
                    <Recentmini />
                    <Recentmini />
                    <Recentmini />
                    <div className="recent__t">
                        Сегодня, 18 мая
                    </div>
                    <Recentmini />
                    <Recentmini />
                </div>
            </div>

        </div>
    );
}

export default Recent;
