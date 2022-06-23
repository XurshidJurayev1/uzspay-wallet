import React, { useState } from 'react';
import uzb from '../../../../assets/images/uzb_Ra.png';
import card from '../../../../assets/images/card.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Acar = () => {
  const [open, setOpen] = useState();

  const data = [
    {
      sum: '2 426 789 сум',
      bank: 'Kapital Bank TGF',
      card: card,
    },
    {
      sum: '2 426 789 сум',
      bank: 'Kapital Bank TGF',
      card: card,
    },
    {
      sum: '2 426 789 сум',
      bank: 'Kapital Bank TGF',
      card: card,
    },
  ];

  return (<div>
    <div className="sidebar__acardion-item">
      <div className="sidebar__acardion-title" onClick={() => setOpen(!open)}>
        <div className="sidebar__acardion-imgText">
          <div className="sidebar__acardion-img">
            <img src={uzb} alt="png" />
          </div>
          <div className="sidebar__acardion-text">
            <span className="sidebar__acardion-text_s">3 426 789 сум</span>
            <span className="sidebar__acardion-text_p">Сумовые карты</span>
          </div>
        </div>
        <div className={(open ? 'sidebar__acardion-icon-active' : '') + ' sidebar__acardion-icon'}>
          <ChevronRightIcon />
        </div>
      </div>
      <div className={(open ? 'sidebar__acardion-text_content-show' : '') + ' sidebar__acardion-text_content'}
           style={open ? {
             height: `${data.length * 85}px`,
           } : null}
      >

        {
          data.map((item, idx) => {
            return (
              <div className="sidebar__acardion-content" key={idx}>
                <div className="sidebar__acardion-content-b">
                  <span className="sidebar__acardion-content_s">{item.sum}</span>
                  <span className="sidebar__acardion-content_p">{item.bank}</span>
                </div>
                <div className="sidebar__acardion-content-img">
                  <img src={item.card} alt="png" />
                </div>
              </div>
            );
          })
        }

      </div>

    </div>
  </div>);
};

export default Acar;
