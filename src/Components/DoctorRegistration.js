// src/components/Pages/DoctorRegistration.js
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    contactInfo: '',
    schedule: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!auth.currentUser) {
      console.error("User not authenticated.");
      return;
    }

    try {
      await addDoc(collection(db, 'doctors'), {
        ...formData,
        userId: auth.currentUser.uid
      });
      console.log('Doctor registered:', formData);

      // Clear the form after submission
      setFormData({
        name: '',
        specialization: '',
        contactInfo: '',
        schedule: ''
      });

      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error("Error adding doctor: ", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'specialization', 'contactInfo', 'schedule'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 mb-2" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
          Register as Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorRegistration;
