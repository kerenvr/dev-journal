//server/emailRoutes.js
import express from 'express';
import sendEmail from '../src/services/emailServices.js';
// Creating a new router instance
const router = express.Router();

// Defining the route for sending emails
router.post('/send-email', async (req, res) => {
    // Extracting email details from the request body
    const { to, subject, text } = req.body;

    try {
        // Attempting to send the email
        await sendEmail(to, subject, text);
        // Sending a success response if email is sent
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        // Logging the error and sending a failure response if email sending fails
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Exporting the router to be used in other parts of the application
export default router;
