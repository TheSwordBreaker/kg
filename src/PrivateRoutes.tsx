import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	let location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return <Outlet />;
};

export default PrivateRoutes;
