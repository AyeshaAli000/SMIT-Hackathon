import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import AppointmentForm from '../AppointmentForm'; // Import the Appointment Form
import backgroundImage from '../../assets/bg-img.jpg'; // Adjust the path as needed
import { db } from '../../firebase'; // Import the Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const AppointmentPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState(''); // To hold success message

  const handleBookAppointment = () => {
    setShowForm(true);
    setMessage(''); // Reset message when form is opened
  };

  const handleSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "appointments"), data);
      console.log("Document written with ID: ", docRef.id);
      setMessage('Your appointment is booked!'); // Set success message
      setShowForm(false); // Optionally hide the form

      // Optional: Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 3000); // Adjust delay as needed
    } catch (e) {
      console.error("Error adding document: ", e);
      setMessage('Error booking appointment. Please try again.');
    }
  };

  return (
    <div 
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image here
    >
      <div className="text-center text-white mb-8">
        <h1 className="text-3xl font-bold mb-4">Manage Your Appointments</h1>
      </div>

      {!showForm ? (
        <div>
          <button 
            onClick={handleBookAppointment} 
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 mr-4"
          >
            Book Appointment
          </button>
          <Link to="/check-appointment"> {/* Link to Check Appointment page */}
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Check Your Appointment
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <AppointmentForm onSubmit={handleSubmit} /> {/* Pass handleSubmit to form */}
          {message && (
            <div className="mt-4 bg-green-500 text-white p-2 rounded">
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
