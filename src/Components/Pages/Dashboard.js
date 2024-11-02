// src/components/Pages/Dashboard.js
import React from 'react';
import DoctorData from './DoctorData';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <DoctorData />
      {/* Other dashboard content can go here */}
    </div>
  );
};

export default Dashboard;
