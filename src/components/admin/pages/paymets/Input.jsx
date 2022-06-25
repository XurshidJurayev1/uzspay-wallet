import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as Search } from '../../../../assets/svg/search2.svg';


const Input = () => {


  const searchFunc = (e) => {
    e.preventDefault();
    console.log('function');
  };

  const placeholder = 'Имя, название или номер телефона';

  return (
    <form className="form__main">
      <button className="form__search_btn" onClick={(e) => searchFunc(e)}>
        <Search />
      </button>
      <input type="text" className="form__control" placeholder={placeholder} />
    </form>
  );
};

export default Input;
