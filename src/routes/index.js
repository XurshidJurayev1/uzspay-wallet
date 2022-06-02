
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Payments from '../components/admin/pages/paymets/Payments';

const Login = lazy(() => import('../components/admin/pages/login/Login'));
const LoginConfirmation = lazy(() => import('../components/admin/pages/login/LoginConfirmation'));
const Main = lazy(() => import('../components/admin/pages/main/Main'));
const AdminRoutes = () => {
  return (<div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/confirmation" element={<LoginConfirmation />} />
        <Route path="/main" element={<Main />} />
        <Route path="/paymet" element={<Payments />} />
      </Routes>
    </div>);
};

export default AdminRoutes;