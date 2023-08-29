import "./globals.css";
import type { Metadata } from "next";
import NavigationBar from "../components/server/NavigationBar";

export const metadata: Metadata = {
	title: "Ryan's Portfolio",
	description:
		"Portfolio about Ryan and his projects, services and testimonials.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="font-montserrat">
				<NavigationBar />
				<div className="pt-16 bg-slate-200">{children}</div>
			</body>
		</html>
	);
}
