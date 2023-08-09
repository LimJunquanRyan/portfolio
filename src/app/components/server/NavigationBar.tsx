import Link from "next/link";
import React from "react";

const NavigationBar: React.FC = () => {
	return (
		<nav className="text-gray-900 bg-white py-3 px-4 sticky w-full shadow-xl">
			<div className="container mx-auto flex justify-between items-center h-full w-full">
				{/* Logo */}
				<Link href="/" className="font-bold text-xl">
					Logo
				</Link>

				{/* Navigation Links */}
				<div className="space-x-7">
					<Link href="/" className="hover:text-gray-400">
						Home
					</Link>
					<Link href="/projects" className="hover:text-gray-400">
						Projects
					</Link>
					<Link href="/services" className="hover:text-gray-400">
						Services
					</Link>
					<Link href="/testimonials" className="hover:text-gray-400">
						Testimonials
					</Link>
				</div>

				{/* Contact Me Button */}
				<Link
					href="/contact"
					className="bg-gray-300 hover:bg-gray-200 py-2 px-4 rounded">
					Contact Me
				</Link>
			</div>
		</nav>
	);
};

export default NavigationBar;
