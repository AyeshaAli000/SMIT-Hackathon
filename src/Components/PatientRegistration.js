// src/components/Pages/PatientRegistration.js
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactDetails: '',
    medicalHistory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      console.error("User is not authenticated. Registration aborted.");
      return;
    }

    try {
      await addDoc(collection(db, 'patients'), {
        ...formData,
        userId: auth.currentUser.uid // Associate patient with the logged-in user
      });

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        contactDetails: '',
        medicalHistory: ''
      });

      // Reload the page to reflect changes
      window.location.reload();
    } catch (error) {
      console.error("Error adding patient: ", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="contactDetails">Contact Details</label>
          <input
            type="text"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="medicalHistory">Medical History</label>
          <textarea
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
          Register as Patient
        </button>
      </form>
    </div>
  );
};

export default PatientRegistration;
