import { createBooking, getBookings } from '../../lib/booking';

export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case 'POST':
            return createBooking(req.body, res);
        case 'GET':
            return getBookings(res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
