import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';



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
      <Route path="/create_password" element={<LoginNewUserPassword />} />
      <Route path="/password" element={<LoginPassword />} />
      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route index element={<Main />} />

      </Route>
    </Routes>
  </div>);
};

export default AdminRoutes;