import React from 'react';

import Maincard from './maincard/Maincard';
import Mainphonecard from './maincardphone/Mainphonecard';
import "./mainindex.scss";

const MainIndex = () => {
    return (
        <div>
            <div className="mainindex">
                <div className="container__main">
                    <h2 className="mainindex__title-p">Платежи и переводы</h2>
                    <div className="row justify-content-between">
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
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <Mainphonecard />
                        </div>
                        <div className="col-md-4">
                            <Mainphonecard />
                        </div>
                        <div className="col-md-4">
                            <Mainphonecard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainIndex;
