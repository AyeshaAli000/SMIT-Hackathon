import React from 'react';

const services = [
  {
    title: 'X-Ray',
    description: 'A non-invasive imaging technique used to view the internal structure of the body. X-rays help diagnose issues like fractures, infections, and tumors.'
  },
  {
    title: 'Medical Checkup',
    description: 'Regular health checkups are crucial for maintaining overall health and early detection of potential issues. Includes vital signs monitoring and medical history assessment.'
  },
  {
    title: 'Prevention and Wellness',
    description: 'Focus on proactive health measures to prevent illnesses. Includes vaccinations, lifestyle counseling, and screenings tailored to individual needs.'
  },
  {
    title: 'General Health',
    description: 'Comprehensive evaluation of your overall health status, including assessments of your physical and mental well-being, and recommendations for a healthier lifestyle.'
  },
  {
    title: 'Physical Exam',
    description: 'A thorough examination performed by a healthcare provider to assess your physical condition and identify any health issues that may need attention.'
  },
  {
    title: 'Blood Work',
    description: 'Laboratory tests to analyze blood samples, helping diagnose conditions, assess organ function, and monitor overall health.'
  }
];

const Services = () => {
  return (
    <div className="p-6">
      <h1 className="text-teal-700 text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
            <h2 className="text-teal-600 text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

