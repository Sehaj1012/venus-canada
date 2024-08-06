import React, { useState } from 'react';
import { useBookings } from './useBookings';

const BookingForm = () => {
    const { createBooking, loading } = useBookings();
    const [date, setDate] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createBooking({ date, service });
            alert('Booking successful');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
            <input type="text" value={service} onChange={e => setService(e.target.value)} required />
            <button type="submit" disabled={loading}>Book</button>
        </form>
    );
};

export default BookingForm;
