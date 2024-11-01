// src/routes/email.js
import express from 'express';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    const msg = {
        to,
        from: 'your_email@example.com', // Your verified sender email
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
});

export default router;
