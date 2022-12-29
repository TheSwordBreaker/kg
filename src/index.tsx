import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// NOTE: Wrap it with Auth0 provider

ReactDOM.render(
	<Auth0Provider
		domain="dev-ej5jrx5b.us.auth0.com"
		clientId="WPCNe4wZsCj9vtnCFTaH1I6FPAutOw2L"
		redirectUri={window.location.origin + "/dash"}
	>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Auth0Provider>,
	document.getElementById("root")
);
