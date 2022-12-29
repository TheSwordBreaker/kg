import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LandingPage = () => {
	const { logout } = useAuth0();
	return (
		<>
			<header className="flex justify-between items-center py-4 md:py-8">
				<a
					className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
					aria-label="logo"
				>
					<svg
						width="95"
						height="94"
						viewBox="0 0 95 94"
						className="w-6 h-auto text-indigo-500"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M96 0V47L48 94H0V47L48 0H96Z" />
					</svg>
				</a>

				<div className=" flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
					<div
						onClick={() =>
							logout({ returnTo: window.location.origin + "/login" })
						}
						className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
					>
						Logout
					</div>
				</div>
			</header>
			<section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
				{/* <!-- image - start --> */}
				<img
					src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
					loading="lazy"
					alt="Photo by Fakurian Design"
					className="w-full h-full object-cover object-center absolute inset-0"
				/>
				{/* <!-- image - end --> */}

				{/* <!-- overlay - start --> */}
				<div className="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
				{/* <!-- overlay - end --> */}

				{/* <!-- text start --> */}
				<div className="sm:max-w-xl flex flex-col items-center relative p-4">
					<p className="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
						Very proud to introduce
					</p>
					<h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
						Revolutionary way to build the web
					</h1>

					<div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
						<a
							href="#"
							className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
						>
							Start now
						</a>

						<a
							href="#"
							className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
						>
							Take tour
						</a>
					</div>
				</div>
				{/* <!-- text end --> */}
			</section>
		</>
	);
};

export default LandingPage;
