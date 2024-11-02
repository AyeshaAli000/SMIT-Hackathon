// src/components/Pages/DoctorData.js
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const DoctorData = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'doctors'));
        const doctorsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched doctors:", doctorsData); // Log fetched data
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registered Doctors</h2>
      {doctors.length === 0 ? (
        <p>No doctors registered yet.</p>
      ) : (
        <ul>
          {doctors.map(doctor => (
            <li key={doctor.id} className="mb-2">
              <strong>Name:</strong> {doctor.name} <br />
              <strong>Specialization:</strong> {doctor.specialization} <br />
              <strong>Contact Info:</strong> {doctor.contactInfo} <br />
              <strong>Schedule:</strong> {doctor.schedule}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoctorData;
