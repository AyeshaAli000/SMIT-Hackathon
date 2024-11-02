import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Import the Firebase configuration
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'; // Import Link for routing

const CheckAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId] = useState("user123"); // Replace with actual user ID logic

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const q = query(collection(db, "appointments"), where("userId", "==", userId)); // Query appointments by userId
        const querySnapshot = await getDocs(q);
        const fetchedAppointments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul className="list-disc">
          {appointments.map(appointment => (
            <li key={appointment.id} className="mb-2">
              <strong>Date:</strong> {appointment.date} <strong>Name:</strong> {appointment.name}
              {/* Link to update appointment */}
              <Link to={`/update-appointment/${appointment.id}`} className="text-blue-500 ml-2">
                Edit
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CheckAppointment;
