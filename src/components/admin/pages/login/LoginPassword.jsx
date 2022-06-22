import React, { useEffect, useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginNavbar from './LoginNavbar';
import InputMask from 'react-input-mask';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';
import back from '../../../../assets/images/caretcircleleft 1.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const LoginPassword = (props) => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [shown, setShown] = useState(false);
  const [btn, setBtn] = useState(false);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (code.length > 0) {
      setBtn(true);
    } else {
      setBtn(false);
    }
    if (code === '') {
      setBtn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);


  const submit = (e) => {
    e.preventDefault();
    navigate('/wallet');
  };

  const name = 'Axmed';


  return (<div className="login">
    <LoginNavbar />
    <div className="login_content">
      <div className="login_content_pass">
        <div
          onClick={() => navigate('/confirmation')}
          className="login_content_pass_back"
          style={{
            backgroundImage: `url(${back})`,
          }} />
        <h4>
          {t('login.password2.title')}, {name}
        </h4>
        <div className="login_content_pass_available">
          <InputMask
            className="login_content_pass_password_input"
            maskChar={null}
            type={shown ? 'text' : 'password'}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={t('login.password2.input')}
          />
          <p className="login_content_pass_wrongPassword">
            {t('login.password2.wrong')}
          </p>
          {
            shown ? <AiOutlineEyeInvisible onClick={() => setShown(false)} />
              :
              <AiOutlineEye onClick={() => setShown(true)} />
          }

        </div>


        {
          btn ?
            <button className="login_content_register_active" onClick={(e) => submit(e)}>
              {t('login.password2.btn')}
            </button>
            :
            <button className="login_content_register_disabled">
              {t('login.password2.btn')}
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
  return {
    phone: state.send,
  };
};

export default connect(mapStateToProps, {})(LoginPassword);