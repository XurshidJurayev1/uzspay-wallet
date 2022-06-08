import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Payments from '../components/admin/pages/paymets/Payments';
import CardNumber from '../components/admin/pages/transMony/Cardnomber/Cardnomber';
import Translate from '../components/admin/pages/transMony/Translate';
import Telephone from '../components/admin/pages/transMony/phoncard/Telephone';
// import Main from '../components/admin/pages/paymets/Main';


const Login = lazy(() => import('../components/admin/pages/login/Login'));
const LoginConfirmation = lazy(() => import('../components/admin/pages/login/LoginConfirmation'));
const Main = lazy(() => import('../components/admin/pages/main/Main'));
const Dashboard = lazy(() => import('../components/admin/DashboardOutlet'));
const LoginNewUserPassword = lazy(() => import('../components/admin/pages/login/LoginNewUserPassword'));
const LoginPassword = lazy(() => import('../components/admin/pages/login/LoginPassword'));


const AdminRoutes = () => {
  return (<div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/confirmation" element={<LoginConfirmation />} />
        <Route path="/main" element={<Main />} />
        <Route path="/paymet" element={<Payments />} />
        <Route path="/trans" element={<Translate />} />
        <Route path="/trans/phone" element={<Telephone />} />
        <Route path="/trans/card" element={<CardNumber />} />
      </Routes>
    </div>);
};

export default AdminRoutes;