// app/booking/page.jsx
import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-extrabold text-white mb-10">Appointment Booking Page</h1>
      <AppointmentForm />
    </div>
  );
};

export default Booking;
