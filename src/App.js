import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Services from "./Components/Pages/Services";
import PatientInfo from "./Components/Pages/Dashboard";
import Home from "./Components/Pages/Home";
import RegistrationForm from "./Components/RegistrationForm";
import AppointmentPage from './Components/Pages/AppointmentPage';
import Login from './Components/Pages/Login'; // Import Login Page
import PatientRegistration from './Components/PatientRegistration';
import DoctorRegistration from "./Components/DoctorRegistration";
import CheckAppointment from './Components/CheckAppointment';
import UpdateAppointment from './Components/UpdateAppointment';
import Dashboard from './Components/Pages/Dashboard';
import PatientData from './Components/PatientData';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/patient" element={<PatientRegistration />} />
        <Route path="/register/doctor" element={<DoctorRegistration />} />
        <Route path="/services" element={<Services />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/check-appointment" component={<CheckAppointment/>} />
        <Route path="/update-appointment/:id" component={<UpdateAppointment/>} />
        <Route path="/dashboard" component={<Dashboard/>} />
        <Route path="/patients" element={<PatientData />} />
      </Routes>
    </Router>
  );
}

export default App;
