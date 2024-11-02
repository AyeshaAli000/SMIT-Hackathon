import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Import the Firebase configuration
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const UpdateAppointment = () => {
  const { id } = useParams(); // Get the appointment ID from the URL
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAppointment = async () => {
      const docRef = doc(db, "appointments", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setAppointment(docSnap.data());
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };

    fetchAppointment();
  }, [id]);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "appointments", id);
      await updateDoc(docRef, appointment);
      setMessage('Appointment updated successfully!');
    } catch (error) {
      console.error("Error updating document: ", error);
      setMessage('Error updating appointment. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Update Appointment</h2>
      {message && <div className="mb-4 text-green-500">{message}</div>}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={appointment.name || ''}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={appointment.date || ''}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
          Update Appointment
        </button>
      </form>
    </div>
  );
};

export default UpdateAppointment;
