import React from 'react';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import '../telephone.scss';
import Cards from '../cards/Cards';
import { ReactComponent as svg1 } from '../../../../../assets/svg/arrowfatlinesdown 2.svg';
import { ReactComponent as svg2 } from '../../../../../assets/svg/creditCard.svg';
import { ReactComponent as svg3 } from '../../../../../assets/svg/share-box 2.svg';
import { ReactComponent as Svg } from '../../../../../assets/svg/hoverFillScore.svg';
import mask from '../../../../../assets/images/Mask group.png';
import { Tooltip } from 'react-tippy';

const Index = () => {
  return (
    <div className="translate">
      {/*<Navbar />*/}
      <div className="container__translate">
        <div className="translate__padd">
          <div className="translate__back">
            <Link to="/wallet/trans"><span><ChevronLeftIcon /></span> Назад</Link>
          </div>
          <div className="translate__mont">
            <h2>Пополнить счёт</h2>
            <div className="translate_row">
              <div className="row">
                <div className="col-md-4">
                  <Cards link="/wallet/trans/score" title="Пополнить через карту" svg={svg2} />
                </div>
                <div className="col-md-4">
                  <Cards link="/wallet/trans/money" title={`Запросить деньги `} svg={svg1} />
                </div>
                <div className="col-md-4">

                  <Tooltip
                    // options
                    html={(
                      <div className="react-tippy">
                        <div style={{
                          width: '100%',
                          height: '86px',
                          borderRadius: '11px',
                          background: '#E7EBF3',
                        }}>
                          <Svg style={{
                            width: '100%',
                            height: '86px',
                          }} />
                        </div>

                        <p>
                          Просто укажите сумму, скопируйте ссылку и отправьте другу
                        </p>
                      </div>
                    )}
                    // position="top"
                    trigger="mouseenter"
                    arrow={true}
                    delay="1000"
                  >
                    <Cards link="/wallet/trans/link" title="Создать ссылку для пополнения" svg={svg3} />
                  </Tooltip>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;