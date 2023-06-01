import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Head from "next/head"

export const metadata = {
	title: "Car rental",
	description: "Rent a car for unbeatable prices",
	icons: {
		icon: "/favicon.png",
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
