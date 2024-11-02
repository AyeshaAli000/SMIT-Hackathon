// src/components/AppointmentForm.js
import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the onSubmit prop with the form data
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 mb-4 w-full"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="border p-2 mb-4 w-full"
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        className="border p-2 mb-4 w-full"
      />
      {/* Add more fields as needed */}
      <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
