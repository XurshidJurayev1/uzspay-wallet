import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TestLanguage from './testLanguage';
import Login from './components/admin/pages/login/Login';
import Main from './components/admin/pages/main/Main';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div className="App">
      <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/main">Main</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      {/* {Wallet
      <TestLanguage />} */}
    </div>
  );
}

export default App;
