import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = () => {
	const { user, isAuthenticated, isLoading, logout } = useAuth0();
	const location = useLocation();
	console.log({ isAuthenticated });
	console.log({ isLoading });

	if (isLoading) return <div>Loading ...</div>;
	// console.log({ user });
	if (!isAuthenticated) {
		// logout({ returnTo: window.location.origin });
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return <Outlet />;
};

export default PrivateRoutes;
