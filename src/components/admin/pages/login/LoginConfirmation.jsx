import React, { useEffect, useState } from 'react';
import './login.scss';
import { useTranslation } from 'react-i18next';
import logo from '../../../../assets/images/Logo.png';
import rus from '../../../../assets/images/rus.png';
import caretdown from '../../../../assets/images/caretdown 1.png';
import uzb from '../../../../assets/images/uzb.png';
import eng from '../../../../assets/images/eng.png';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';

const LoginConfirmation = (props) => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);
  const [code, setCode] = useState('');
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

  useEffect(() => {
    if (code.length === 4) {

    }

  }, [code]);

  const onChange = (e) => {
    // const countryCode = '+998';
    // const concat = e.target.value;
    // setPhone(countryCode.concat(concat));
    setCode(e.target.value);
  };

  const submit = () => {
    navigate('/main');
  };


  return (<div className="login">
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
    <div className="login_content">
      <div className="login_content_confirm">
        <h4>
          {/*{t('login.title')}*/}
          {t('login.confirm.title')}
        </h4>
        <p className="login_content_confirm_code">{t('login.confirm.text')} {props.phone} </p>
        <InputMask
          maskChar={null}
          mask="9999"
          type="password"
          value={code}
          onChange={(e) => onChange(e)}
          placeholder={t('login.confirm.placeholder')}
        />


        <p className="login_content_confirm_resend">
          {t('login.confirm.resend')}
        </p>

        <Tooltip
          // options
          html={(
            <div>
              <p>
                {t('login.confirm.tippy.title')}
              </p>
              <br />
              <p>
                {t('login.confirm.tippy.1')}
              </p>
              <br />
              <p>
                {t('login.confirm.tippy.2')}
              </p>
              <br />
              <p>
                {t('login.confirm.tippy.3')}
              </p>
              <br />
            </div>
          )}
          position="bottom"
          trigger="mouseenter"
          arrow={true}
        >
          <p className="login_content_confirm_notComingSms">
            {t('login.confirm.notComing')}
          </p>
        </Tooltip>


      </div>
      <p className="login_content_footer">
        {t('login.footer')}
      </p>
    </div>
  </div>);
};

const mapStateToProps = (state) => {
  return {
    phone: state.send,
  };
};

export default connect(mapStateToProps, {})(LoginConfirmation);