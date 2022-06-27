import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


const Login = lazy(() => import('../components/admin/pages/login/Login'));
const LoginConfirmation = lazy(() => import('../components/admin/pages/login/LoginConfirmation'));
const Main = lazy(() => import('../components/admin/pages/main/Main'));
const Dashboard = lazy(() => import('../components/admin/DashboardOutlet'));
const LoginNewUserPassword = lazy(() => import('../components/admin/pages/login/LoginNewUserPassword'));
const LoginPassword = lazy(() => import('../components/admin/pages/login/LoginPassword'));
const Payments = lazy(() => import('../components/admin/pages/paymets/Payments'));
const TelephoneNumber = lazy(() => import('../components/admin/pages/transMoney/TelephoneNumber/TelephoneNumber'));
const Transfer = lazy(() => import('../components/admin/pages/transMoney/Transfer'));
const Card = lazy(() => import('../components/admin/pages/transMoney/Card/Card'));
const Score = lazy(() => import('../components/admin/pages/transMoney/scorenumber/Score'));
const MoneyCard = lazy(() => import('../components/admin/pages/transMoney/mony/Monycard'));
const LinkCard = lazy(() => import('../components/admin/pages/transMoney/link/Linkcard'));
const FillScore = lazy(() => import('../components/admin/pages/transMoney/FillScore'));
const Check = lazy(()=> import('../components/admin/pages/transMoney/check/check'))
// const x = lazy(() => import(''));
// const x = lazy(() => import(''));
// const x = lazy(() => import(''));
// const x = lazy(() => import(''));


const AdminRoutes = () => {
  return (<div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/confirmation" element={<LoginConfirmation />} />
      <Route path="/pass" element={<LoginPassword />} />
      <Route path="/pass/new" element={<LoginNewUserPassword />} />
      <Route path="/wallet/*" element={<Dashboard />}>
        <Route index element={<Main />} />
        <Route path="payment">
          <Route index element={<Payments />} />
          <Route path="trans">
            <Route index element={<Transfer />} />
            <Route path="card" element={<Card />} />
            <Route path="phone" element={<TelephoneNumber />} />
            <Route path="fill" element={<FillScore />} />
            <Route path="score" element={<Score />} />
            <Route path="money" element={<MoneyCard />} />
            <Route path="link" element={<LinkCard />} />
          </Route>
          <Route path='check' element={<Check />} />
        </Route>

      </Route>

    </Routes>
  </div>);
};

export default AdminRoutes;