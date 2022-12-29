import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div className="flex h-full w-full justify-center items-center">
			<button
				onClick={() => loginWithRedirect()}
				className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
			>
				Log In
			</button>
		</div>
	);
};

export default LoginButton;
