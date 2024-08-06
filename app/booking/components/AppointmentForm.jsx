"use client"; // Specify that this is a client component

import React, { useState } from 'react';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeDate = (e) => setDate(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/createBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, date }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json();
      alert(`Appointment booked successfully! Booking ID: ${data.id}`);

      // Reset form fields
      setName('');
      setEmail('');
      setDate('');
    } catch (error) {
      console.error('Failed to book appointment:', error);
      alert('Failed to book appointment: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Book an Appointment</h2>
      <form onSubmit={onSubmit} className="flex flex-col w-full">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
          className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
          className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="date"
          value={date}
          onChange={onChangeDate}
          className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
