import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducers';
import './i18Next';
   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
  <Suspense fallback={<h1>Loading</h1>}>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </Suspense>
</Provider>);

