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
			<body>
				<NavigationBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
