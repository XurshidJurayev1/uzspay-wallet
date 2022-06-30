import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducers';
import { BrowserRouter } from 'react-router-dom';
import './i18Next';
import { Box } from '@mui/material';
import { HashLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import 'core-js/stable';

const Loader = () => {
  return (<div>

    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <HashLoader color="#5FB5F3" size={70} speedMultiplier="2" />
    </Box>
  </div>);
};
ReactDOM.render(<React.StrictMode>
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
</React.StrictMode>, document.getElementById('root'));
