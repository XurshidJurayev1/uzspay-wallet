import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const placholder = "Имя или номер телефона"

const Inputrans = () => {
    return (
        <form action="" className="form__main">
            <button className="form__search_btn">
                <SearchIcon />
            </button>
            <input type="search" className="form__corntrol" placeholder={placholder} />
        </form>
    );
}

export default Inputrans;
