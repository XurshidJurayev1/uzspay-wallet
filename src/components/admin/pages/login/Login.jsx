import React, { useEffect, useState } from 'react';
import './login.scss';
import './Country_input.scss';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { sendPhone } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
import globe from '../../../../assets/svg/globe2.svg';
import uz from './countrys/flags/uzb.svg';
import { countrys } from './countrys/Countrys';
import InputMask from 'react-input-mask';
import search from '../../../../assets/svg/search2.svg';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';

const Login = (props) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [openCode, setOpenCode] = useState(false);
  const [code, setCode] = useState({
    name: 'Uzbekistan', code: 998, short: 'uz', flag: uz,
  });
  const [btn, setBtn] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const userPhone = (code.code + phone).replace('+', '').replace('(', '').replace(')', '').replaceAll(' ', '').replaceAll('-', '');
  const { t } = useTranslation();


  const countryFlag = String(code.code).length >= 1 ? code.flag : globe;


  let string = countrySearch;
  let stringNew = string.replace(/[^0-9]/g, '');
  console.log(Number(stringNew));


  const countrysArr = countrys
    .filter(i => Number(stringNew) === 0 ? i.name.toLowerCase().includes(countrySearch.toLowerCase()) : String(i.code).toLowerCase().includes(countrySearch.toLowerCase()));


  console.log(countrysArr);
  useEffect(() => {
    if (code.code > 0 && phone.replace('(', '').replace(')', '').replaceAll(' ', '').replaceAll('-', '').length === 9) {
      setBtn(true);
    } else {
      setBtn(false);

    }


  }, [phone, code]);


  const submit = (e) => {
    e.preventDefault();
    props.sendPhone(userPhone);
    navigate('/confirmation');
  };


  const changeCodePhone = (e) => {
    setCode({ ...code, code: e.target.value });
  };


  return (<div className="login">
    <div className="login_content_background" style={openCode ? { display: 'block' } : { display: 'none' }}
         onClick={() => setOpenCode(false)} />
    <LoginNavbar />
    <div className="login_content">
      <div className="login_content_background" style={openCode ? { display: 'block' } : { display: 'none' }}
           onClick={() => setOpenCode(false)} />
      <div className="login_content_register" style={openCode ? { zIndex: 'auto' } : null}>

        <h4>
          {t('login.title')}
        </h4>
        <div className="country-input">
          <div className="country-input_code" onClick={() => setOpenCode(!openCode)}>
            <div className="country-input_code_flag"
                 style={{ backgroundImage: `url(${countryFlag})` }} />
            <InputMask
              maskChar={null}
              mask="+999"
              className="country-input_code_input"
              value={`${code.code}`}
              onChange={(e) => changeCodePhone(e)}
            />
          </div>

          <div className="country-input_select" style={openCode ? { display: 'block' } : { display: 'none' }}>
            <div className="country-input_select_search">
              <div className="country-input_select_search_input">
                <div className="country-input_select_search_input_search"
                     style={{ backgroundImage: `url(${search})` }} />
                <input
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  className="country-input_select_search_input_input" />
                <div className="country-input_select_search_input_close"
                     onClick={() => setCountrySearch('')}>
                  <Close />
                </div>
              </div>
              <button className="country-input_select_search_btn" onClick={() => setOpenCode(false)}>Отмена</button>
            </div>
            {countrysArr.length > 0 ? countrysArr.map((item, idx) => {
              return (<div className="country-input_select_item" key={idx} onClick={() => {
                setCode(item);
                setOpenCode(false);
              }}>
                <div className="country-input_select_item_flag" style={{ backgroundImage: `url(${item.flag})` }} />
                <div className="country-input_select_item_content">
                  <p className="country-input_select_item_content_country">{item.name}</p>
                  <p className="country-input_select_item_content_code">{item.code}</p>
                </div>
              </div>);
            }) : <p>not found</p>}
          </div>
          <span className="country-input_span" />
          <div className="country-input_input">
            <InputMask
              maskChar={null}
              mask="(99) 999-99-99"
              placeholder={t('login.placeholder')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>


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
