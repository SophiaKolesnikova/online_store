import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthProps {
    children: React.ReactElement;
}

const AuthWrapper: React.FC<AuthProps> = ({
    children,
}: {
    children: React.ReactElement;
}) => {
    const authToken = localStorage.getItem('authToken');

    const location = useLocation();

    if (!authToken) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default AuthWrapper;
