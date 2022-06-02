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


const LoginNewUserPassword = (props) => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [code2, setCode2] = useState('');
  const [shown, setShown] = useState(false);
  const [shown2, setShown2] = useState(false);
  const [btn, setBtn] = useState(false);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (code === code2 && code.length > 0) {
      setBtn(true);
    } else {
      setBtn(false);
    }
    if (code === '') {
      setBtn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  useEffect(() => {
    if (code === code2 && code.length > 0) {
      setBtn(true);
    } else {
      setBtn(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code2]);


  const submit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };


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
          {t('login.password.title')}
        </h4>
        <div className="login_content_pass_password">
          <InputMask
            className="login_content_pass_password_input"
            maskChar={null}

            type={shown ? 'text' : 'password'}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={t('login.password.input')}
          />
          {
            shown ? <AiOutlineEyeInvisible onClick={() => setShown(false)} />
              :
              <AiOutlineEye onClick={() => setShown(true)} />
          }

        </div>
        <div className="login_content_pass_password" style={{
          marginBottom: '30px',
        }}>
          <InputMask
            className="login_content_confirm_password_input"
            maskChar={null}

            type={shown2 ? 'text' : 'password'}
            value={code2}
            onChange={(e) => setCode2(e.target.value)}
            placeholder={t('login.password.input2')}
          />
          {
            shown2 ? <AiOutlineEyeInvisible onClick={() => setShown2(false)} />
              :
              <AiOutlineEye onClick={() => setShown2(true)} />
          }

        </div>


        {
          btn ?
            <button className="login_content_register_active" onClick={(e) => submit(e)}>
              {t('login.password.btn')}
            </button>
            :
            <button className="login_content_register_disabled">
              {t('login.password.btn')}
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

export default connect(mapStateToProps, {})(LoginNewUserPassword);