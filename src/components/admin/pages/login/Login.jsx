import React, { useEffect, useState } from 'react';
import './login.scss';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { sendPhone } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';

const Login = (props) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('+998');
  const [btn, setBtn] = useState(false);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (phone.length === 19) {
      setBtn(true);
    } else {
      setBtn(false);

    }

  }, [phone]);

  const onChange = (e) => {
    // const countryCode = '+998';
    // const concat = e.target.value;
    // setPhone(countryCode.concat(concat));
    setPhone(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    props.sendPhone(phone);
    navigate('/confirmation');
  };


  return (<div className="login">
    <LoginNavbar />
    <div className="login_content">
      <div className="login_content_register">

        <h4>
          {t('login.title')}
        </h4>

        <InputMask
          maskChar={null}
          mask="+998 (99) 999-99-99"
          value={phone}
          onChange={(e) => onChange(e)}
          placeholder={t('login.placeholder')}
        />


        {
          btn ?
            <button className="login_content_register_active" onClick={(e) => submit(e)}>
              {t('login.btn')}
            </button>
            :
            <button className="login_content_register_disabled">
              {t('login.btn')}
            </button>

        }

      </div>
      <p className="login_content_footer">
        {t('login.footer')}
      </p>
    </div>
  </div>);
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { sendPhone })(Login);
