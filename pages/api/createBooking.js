import { executeQuery } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, date } = req.body;

    // Validate input data
    if (!name || !email || !date) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Insert the booking into the database
      const result = await executeQuery(
        'INSERT INTO Bookings (name, email, date) VALUES (?, ?, ?)',
        [name, email, date]
      );

      // Send a success response with the newly created booking ID
      res.status(200).json({ id: result.insertId, message: 'Booking created successfully.' });
    } catch (error) {
      console.error('Failed to create booking:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
