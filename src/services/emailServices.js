//src/services/emailServices.js
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587, // or 465 for SSL
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY, // Use your SendGrid API key
        },
    });

    const mailOptions = {
        from: 'kerenv@outlook.com', // Use your verified sender email
        to,
        subject,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendEmail;