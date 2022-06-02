import React from 'react';
import dowloand from '../../../../assets/images/dowloand.png'
import phone461 from '../../../../assets/images/461.png'
const Mainbanner = () => {
    return (

        <div className="wrapper__mian-banner">
            <div className="wrapper__mian-banner-left">
                <h1>Всё круче и круче!</h1>
                <p>Представляем вам наше мобильное приложение. Управляйте вашими финансами в любой момент.</p>
                <ul>
                    <li>
                        <a href="javascriptVoid">
                            <img src={dowloand} alt="png" />
                        </a>
                    </li>
                    <li>
                        <a href="javascriptVoid">
                            <img src={dowloand} alt="png" />
                        </a>
                    </li>
                    <li>
                        <a href="javascriptVoid">
                            <img src={dowloand} alt="png" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="wrapper__mian-banner-right">
                <img src={phone461} alt="png" />
            </div>
        </div>

    );
}

export default Mainbanner;
