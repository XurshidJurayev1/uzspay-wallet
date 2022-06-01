import React, { useState } from 'react';
import './loginNavbar.scss';
import logo from '../../../../assets/images/Logo.png';
import rus from '../../../../assets/images/rus.png';
import caretdown from '../../../../assets/images/caretdown 1.png';
import uzb from '../../../../assets/images/uzb.png';
import eng from '../../../../assets/images/eng.png';
import { useTranslation } from 'react-i18next';

const LoginNavbar = () => {
  const [select, setSelect] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const showSelect = () => {
    setSelect(!select);
  };

  const changeLang = (lang) => {
    setSelect(false);
    changeLanguage(lang);
  };

  return (
    <div className="login_navbar">
      <div className="login_navbar_logo" style={{
        backgroundImage: `url(${logo})`,
      }} />
      <div className="login_navbar_language">
        <div className="login_navbar_language_active" onClick={() => showSelect()}>
          {i18n.language === 'ru' && <>
            <div className="login_navbar_language_active_flag" style={{
              backgroundImage: `url(${rus})`,
            }} />
            <p>Русский</p>
            <div className="login_navbar_language_active_icon"
                 style={!select ? { backgroundImage: `url(${caretdown})` } : {
                   backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                 }} />
          </>}
          {i18n.language === 'uz' && <>
            <div className="login_navbar_language_active_flag" style={{
              backgroundImage: `url(${uzb})`,
            }} />
            <p>O‘zbekcha</p>
            <div className="login_navbar_language_active_icon"
                 style={!select ? { backgroundImage: `url(${caretdown})` } : {
                   backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                 }} />
          </>}
          {i18n.language === 'уз' && <>
            <div className="login_navbar_language_active_flag" style={{
              backgroundImage: `url(${uzb})`,
            }} />
            <p>Ӯзбекча</p>
            <div className="login_navbar_language_active_icon"
                 style={!select ? { backgroundImage: `url(${caretdown})` } : {
                   backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                 }} />
          </>}
          {i18n.language === 'en' && <>
            <div className="login_navbar_language_active_flag" style={{
              backgroundImage: `url(${eng})`,
            }} />
            <p>English</p>
            <div className="login_navbar_language_active_icon"
                 style={!select ? { backgroundImage: `url(${caretdown})` } : {
                   backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                 }} />
          </>}

        </div>
        <div className="login_navbar_language_select" style={select ? { display: 'block' } : { display: 'none' }}>

          <div className="login_navbar_language_select_item" onClick={() => changeLang('ru')}>
            <div className="login_navbar_language_select_item_flag" style={{
              backgroundImage: `url(${rus})`,
            }} />
            <p>Русский</p>
          </div>
          <div className="login_navbar_language_select_item" onClick={() => changeLang('uz')}>
            <div className="login_navbar_language_select_item_flag" style={{
              backgroundImage: `url(${uzb})`,
            }} />
            <p>O‘zbekcha</p>
          </div>
          <div className="login_navbar_language_select_item" onClick={() => changeLang('уз')}>
            <div className="login_navbar_language_select_item_flag" style={{
              backgroundImage: `url(${uzb})`,
            }} />
            <p>Ӯзбекча</p>
          </div>
          <div className="login_navbar_language_select_item" onClick={() => changeLang('en')}>
            <div className="login_navbar_language_select_item_flag" style={{
              backgroundImage: `url(${eng})`,
            }} />
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;