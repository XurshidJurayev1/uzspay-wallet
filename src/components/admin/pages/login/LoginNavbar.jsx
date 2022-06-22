import React, { useState } from 'react';
import './loginNavbar.scss';
import logo from '../../../../assets/svg/Logo.svg';
import rus from '../../../../assets/svg/rus.svg';
import caretdown from '../../../../assets/images/caretdown 1.png';
import uzb from '../../../../assets/svg/uzb.svg';
import eng from '../../../../assets/svg/eng.svg';
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

    const test = () => {
      console.log('asdasdsa');
    };

    return (
      <div className="login_navbar">
        <div className="login_navbar_logo" style={{
          backgroundImage: `url(${logo})`,
        }} />
        <div className="login_navbar_language" onBlur={() => setSelect(false)}>
          < div className="login_navbar_language_active"
                onClick={() => showSelect()}
          >
            {i18n.language === 'ru' && <>
              <div className="login_navbar_language_active_flag" style={{
                backgroundImage: `url(${rus})`,
              }} />
              <p className="d-none d-sm-block">Русский</p>
              <p className="d-block d-sm-none">Ру</p>
              <div className="login_navbar_language_active_icon"
                   style={!select ? { backgroundImage: `url(${caretdown})` } : {
                     backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                   }} />
            </>}
            {i18n.language === 'uz' && <>
              <div className="login_navbar_language_active_flag" style={{
                backgroundImage: `url(${uzb})`,
              }} />
              <p className="d-none d-sm-block">O‘zbekcha</p>
              <p className="d-block d-sm-none">Uz</p>
              <div className="login_navbar_language_active_icon"
                   style={!select ? { backgroundImage: `url(${caretdown})` } : {
                     backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                   }} />
            </>}
            {i18n.language === 'уз' && <>
              <div className="login_navbar_language_active_flag" style={{
                backgroundImage: `url(${uzb})`,
              }} />
              <p className="d-none d-sm-block">Ӯзбекча</p>
              <p className="d-block d-sm-none">Уз</p>
              <div className="login_navbar_language_active_icon"
                   style={!select ? { backgroundImage: `url(${caretdown})` } : {
                     backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                   }} />
            </>}
            {i18n.language === 'en' && <>
              <div className="login_navbar_language_active_flag" style={{
                backgroundImage: `url(${eng})`,
              }} />
              <p className="d-none d-sm-block">English</p>
              <p className="d-block d-sm-none">eng</p>
              <div className="login_navbar_language_active_icon"
                   style={!select ? { backgroundImage: `url(${caretdown})` } : {
                     backgroundImage: `url(${caretdown})`, transform: 'rotate(180deg)',
                   }} />
            </>}

          </div>
          <div className="login_navbar_language_select"
               onFocus={() => setSelect(false)}
               style={select ? { display: 'block' } : { display: 'none' }}>

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
  }
;

export default LoginNavbar;