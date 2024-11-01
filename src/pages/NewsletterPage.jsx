// src/pages/Newsletter.jsx
import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:3000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: email,
                    subject: 'Newsletter Sign-Up',
                    text: 'Thank you for signing up for our newsletter!',
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setMessage('Thank you for signing up!');
            setEmail('');
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('There was an error signing you up. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div 
            className="flex items-center justify-center bg-cover bg-center h-screen rounded-lg overflow-hidden" 
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1660491291397-e81c21c1d554?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBpbmt8ZW58MHx8MHx8fDA%3D")` }}>
            
            <div className="max-w-lg p-6 bg-white shadow-md rounded-lg opacity-90">
                <h2 className="text-3xl font-semibold text-center mb-4">Join Our Newsletter</h2>
                <p className="text-gray-600 text-center mb-6">Stay updated with our latest news and offers!</p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border border-gray-300 p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    />
                    <button
                        type="submit"
                        className={`bg-fuchsia-400 text-white p-3 rounded-md transition duration-200 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-fuchsia-600'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Sign Up'}
                    </button>
                </form>
                {message && <p className={`mt-4 text-center ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
            </div>
        </div>
    );
};

export default Newsletter;
