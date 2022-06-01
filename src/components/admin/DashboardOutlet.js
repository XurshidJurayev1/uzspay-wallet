import React from 'react';
import './DashboardOutlet.scss';
import Navbar from './utils/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardOutlet = () => {
  return (
    <div className="dashboard_outlet">
      <Navbar />
      <div className="dashboard_outlet_container">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardOutlet;