import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../src/screens/pageNotFound/index";
import LandingPage from "./screens/landingPage/landingPage";

// NOTE: Place the PrivateRoutes here.

function App() {
	return (
		<Routes>
			<Route element={<LandingPage />} path="/" />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
