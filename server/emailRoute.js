//server/emailRoutes.js
import express from 'express';
import sendEmail from '../src/services/emailServices.js';

const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        await sendEmail(to, subject, text);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

export default router;
