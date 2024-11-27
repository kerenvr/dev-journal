import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const CallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Parse the query parameters from the URL
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      // Handle the authentication code and state (e.g., exchange the code for a token)
      console.log('Authentication Code:', code);
      console.log('State:', state);

      // Redirect to another page after processing (e.g., the homepage)
      navigate('/');
    } else {
      // Handle error if code or state is missing
      console.error('Missing authentication code or state');
    }
  }, [location.search, navigate]);

  return (
    <div>
      <h2>Processing Authentication...</h2>
      <p>Please wait while we complete your login process.</p>
    </div>
  );
};

