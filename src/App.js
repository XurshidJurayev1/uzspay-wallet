// import {useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-tippy/dist/tippy.css';
import AdminRoutes from './routes';
import './app.scss';

const App = () => {

  return (
    <div className="App">
      <AdminRoutes />
    </div>
  );
};

export default App;
