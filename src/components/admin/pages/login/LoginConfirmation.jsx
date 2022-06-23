import React, { useEffect, useState } from 'react';
import './login.scss';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';
import LoginNavbar from './LoginNavbar';
import back from '../../../../assets/images/caretcircleleft 1.png';

const LoginConfirmation = (props) => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (code.length === 4) {
      navigate('/pass');
    }

  }, [code]);

  const onChange = (e) => {
    setCode(e.target.value);
  };
  const formatSumm = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) {
      return phoneNumber;
    }
    if (phoneNumberLength === 4) {
      return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
    }
    if (phoneNumberLength < 6) {
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
    }
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength === 7) {
      return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)}`;
    }
    if (phoneNumberLength < 9) {
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5)} `;
    }
    // return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)}  `;
  };

  const phone = formatSumm(props.phone);


  return (<div className="login">
    <LoginNavbar />
    <div className="login_content">
      <div className="login_content_confirm">
        <div
          onClick={() => navigate('/')}
          className="login_content_confirm_back"
          style={{
            backgroundImage: `url(${back})`,
          }} />
        <h4>
          {/*{t('login.title')}*/}
          {t('login.confirm.title')}
        </h4>
        <p className="login_content_confirm_code">{t('login.confirm.text')} +{phone} </p>
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