import React, { useState } from 'react';
import { auth, db } from '../../firebase'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore'; // For storing user data

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '', // Add name for registration
  });
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and registration

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        // Register user
        const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
        const user = userCredential.user;
        
        // Store user data in Firestore
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: formData.name,
          email: formData.email,
        });
        
        console.log('User registered:', user);
      } else {
        // Log in user
        const userCredential = await auth.signInWithEmailAndPassword(formData.email, formData.password);
        console.log('User logged in:', userCredential.user);
      }
      
      // Reset form after successful login/registration
      setFormData({ email: '', password: '', name: '' });
    } catch (error) {
      console.error("Error during authentication: ", error);
      // Handle errors here (e.g., show error message)
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
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
        )}
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
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <button 
        onClick={() => setIsRegistering(!isRegistering)} 
        className="mt-4 text-teal-500 hover:underline"
      >
        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
    </div>
  );
};

export default Login;
