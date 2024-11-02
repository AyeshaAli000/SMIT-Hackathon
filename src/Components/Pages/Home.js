// src/components/Pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero.webp'; // Adjust the path as needed
import Services from './Services';

const Home = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/appointments'); // Navigate to the appointment scheduling page
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white font-bold "
        style={{ backgroundImage: `url(${heroImage})` }} // Background image for the hero section
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Our <span>Doctor Appointment System</span></h1>
        <p className="text-lg text-center mb-6 max-w-lg">
          Our platform streamlines the process of<span>scheduling and managing doctor's appointments,</span>  
          enhancing your healthcare experience with convenience and efficiency.
        </p>
        <button 
          onClick={handleBookAppointment} 
          className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
        >
          Book Appointment
        </button>
      </div>
<div>
<h1 className="text-teal-700 text-4xl font-bold text-center pt-11 mb-4">Welcome to Our Health Services</h1>
      {/* Other content for your Home page */}
      
      {/* Integrate Services section */}
      <Services />
</div>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Doctor Appointment System. All Rights Reserved.</p>
      </footer>

    </div>
    
  );
};

export default Home;
