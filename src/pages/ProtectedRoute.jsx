import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    // Show a loading state while checking authentication
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If not authenticated, redirect to Auth0 login
    if (!isAuthenticated) {
        loginWithRedirect(); // Redirect to Auth0 login
        return null; // Render nothing while redirecting
    }

    // Render the children if authenticated
    return children;
};

export default ProtectedRoute;
