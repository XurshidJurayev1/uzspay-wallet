import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TestLanguage from './testLanguage';

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
      Wallet
      <TestLanguage />
    </div>
  );
}

export default App;
