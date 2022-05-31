import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-tippy/dist/tippy.css';
import AdminRoutes from './routes';

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
      <AdminRoutes />
    </div>
  );
}

export default App;
