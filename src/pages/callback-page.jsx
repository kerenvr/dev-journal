import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// This example assumes you're using Auth0 or a similar OAuth provider
export const CallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);      // To handle any errors

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      // Call your backend or Auth0's token endpoint to exchange code for a token
      const fetchAccessToken = async () => {
        try {
          const response = await fetch('/api/exchange-token', {  // Adjust your backend URL as needed
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, state }),  // Send code and state to the backend
          });

          const data = await response.json();
          if (response.ok) {
            // Assume the response contains the token or other necessary info
            console.log('Authentication successful:', data);

            // Store token (e.g., in localStorage or context)
            localStorage.setItem('authToken', data.token);

            // Redirect to the homepage or dashboard after successful authentication
            navigate('/dashboard');
          } else {
            throw new Error('Failed to exchange token');
          }
        } catch (err) {
          console.error('Error exchanging token:', err);
          setError('Failed to authenticate. Please try again.');
        } finally {
          setLoading(false);
        }
      };

      fetchAccessToken();
    } else {
      setError('Missing authentication code or state');
      setLoading(false);
    }
  }, [location.search, navigate]);

  if (loading) {
    return (
      <div>
        <h2>Processing Authentication...</h2>
        <p>Please wait while we complete your login process.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Authentication Failed</h2>
        <p>{error}</p>
        <p><button onClick={() => navigate('/')}>Go Back to Home</button></p>
      </div>
    );
  }

  return null;  // Fallback in case loading or error state is handled
};
