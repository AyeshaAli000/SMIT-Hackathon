// src/components/RegistrationForm.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Correctly navigate to the login page
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      
      <div className="mb-4">
        <Link to="/register/patient">
          <button className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 mb-2">
            Register as Patient
          </button>
        </Link>
        <Link to="/register/doctor">
          <button className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
            Register as Doctor
          </button>
        </Link>
      </div>
      
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <button onClick={handleLoginClick} className="text-teal-500 underline ml-1">Login</button>
      </p>
    </div>
  );
};

export default RegistrationForm;
