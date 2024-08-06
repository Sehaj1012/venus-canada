import { db } from '../../lib/firebase'; // Import the Firestore instance
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, date } = req.body;

      // Validate input data
      if (!name || !email || !date) {
        return res.status(400).json({ error: "All fields are required." });
      }

      // Add a new document to the 'bookings' collection
      const docRef = await addDoc(collection(db, "bookings"), {
        name,
        email,
        date: new Date(date).toISOString(), // Store date as ISO string
      });

      // Send a success response
      res.status(200).json({ id: docRef.id, message: 'Booking created successfully.' });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
