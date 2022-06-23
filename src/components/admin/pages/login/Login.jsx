import React, { useEffect, useState } from 'react';
import './login.scss';
import { useTranslation } from 'react-i18next';
// import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { sendPhone } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

// import 'react-phone-input-2/lib/bootstrap.css';

const Login = (props) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [focus, setFocus] = useState(false);
  const [btn, setBtn] = useState(false);
  const { t, i18n } = useTranslation();
  console.log(navigate);

  useEffect(() => {
    if (phone.length === 12) {
      setBtn(true);
    } else {
      setBtn(false);

    }

  }, [phone]);

  const onChange = (e) => {

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

        {/*<InputMask*/}
        {/*  maskChar={null}*/}
        {/*  mask="+998 (99) 999-99-99"*/}
        {/*  value={phone}*/}
        {/*  onChange={(e) => onChange(e)}*/}
        {/*  placeholder={t('login.placeholder')}*/}
        {/*/>*/}


        <PhoneInput
          // onFocus={() => setFocus(true)}
          onBlur={() => setFocus(true)}
          inputClass="login_content_register_input"
          dropdownClass="login_content_register_input_drop"
          searchClass="login_content_register_input_search"
          inputProps={{
            name: t('login.placeholder'), required: true, autoFocus: true,
          }}
          // specialLabel={t('login.placeholder')}
          specialLabel={''}
          enableAreaCodes={true}
          enableAreaCodeStretch
          showDropdown={false}
          enableSearch={true}
          value={phone}
          onChange={setPhone}
          placeholder={''}
          // placeholder={t('login.placeholder')}
          masks={{ uz: '(..) ...-..-..', at: '(....) ...-..-..' }}
          regions={'asia'}
          country="uz"
        />


        {btn ? <button className="login_content_register_active" onClick={(e) => submit(e)}>
          {t('login.btn')}
        </button> : <button className="login_content_register_disabled">
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
