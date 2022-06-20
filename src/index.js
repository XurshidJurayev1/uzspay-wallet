import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducers';
import './i18Next';
import { Box } from '@mui/material';
import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <HashLoader color="#5FB5F3" size={70} speedMultiplier="2" />
    </Box>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </Suspense>
</Provider>);

