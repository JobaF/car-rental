"use client"

import { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import HamburgerIcon from "@/components/HamburgerIcon"
import { HOSTNAME_CDN } from "@/utils/constants"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const navbarLinks = [
		{ name: "Home", url: "" },
		{ name: "About", url: "/about" },
		{ name: "Vehicles", url: "/vehicles" },
		{ name: "Testimonials", url: "/testimonials" },
		{ name: "Our Team", url: "/team" },
		{ name: "Contact", url: "/contact" },
	]
	const isSignedIn = false
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="flex justify-between items-center px-3 max-w-7xl mx-auto py-2">
			{/* car rental logo */}
			<Link href="" className="w-36 p-2">
				<Image
					src={HOSTNAME_CDN + "car-rental-logo.png"}
					width={200}
					height={200}
					alt="car rental logo"
					className="object-cover"
				/>
			</Link>
			{/* car rental links */}
			<div className="lg:flex hidden gap-3">
				{navbarLinks.map((link) => (
					<Link
						key={link.name}
						href={link.url}
						className="p-2 text-md hover:text-orange-500"
					>
						{link.name}
					</Link>
				))}
			</div>
			{/* sign in / register */}
			{!isSignedIn && (
				<div className="lg:flex hidden gap-5">
					<button className="p-2 rounded-md px-4 border border-black hover:bg-black hover:text-white">
						Sign In
					</button>
					<button className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-md px-4">
						Register
					</button>
				</div>
			)}
			<HamburgerIcon
				isOpen={isOpen}
				onClick={() => setIsOpen((prev) => !prev)}
			/>
			{isOpen && (
				<div className="absolute flex flex-col p-5 text-lg gap-5 top-20 right-20 bg-gray-200 z-50 rounded-lg">
					{navbarLinks.map((link) => (
						<Link
							onClick={() => setIsOpen(false)}
							key={link.name}
							href={link.url}
							className="hover:text-orange-500 font-bold"
						>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}

export default Navbar
