import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../src/screens/pageNotFound/index";
import PrivateRoutes from "./PrivateRoutes";
import LoginButton from "./screens/auth/login";
import LandingPage from "./screens/landingPage/landingPage";

// NOTE: Place the PrivateRoutes here.

function App() {
	return (
		<Routes>
			<Route path="dash" element={<PrivateRoutes />}>
				<Route element={<LandingPage />} path="" />
			</Route>

			<Route path="Login" element={<LoginButton />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
