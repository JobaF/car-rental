"use client"

import { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import HamburgerIcon from "@/components/HamburgerIcon"
import logo from "../../public/car-rental-logo.png"

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
		<div className="pt-8 h-[5vh] flex lg:justify-evenly justify-between px-12 items-center text-lg">
			{/* car rental logo */}
			<Link href="" className="w-36 p-2">
				<Image src={logo} alt="car rental logo" className="object-cover" />
			</Link>
			{/* car rental links */}
			<div className="lg:flex hidden gap-3">
				{navbarLinks.map((link) => (
					<Link
						key={link.name}
						href={link.url}
						className="p-2 text-md hover:underline hover:underline-offset-4"
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
					<button className="bg-orange-500 hover:bg-orange-500 p-2 rounded-md px-4">
						Register
					</button>
				</div>
			)}
			<HamburgerIcon
				isOpen={isOpen}
				onClick={() => setIsOpen((prev) => !prev)}
			/>
			{isOpen && (
				<div className="absolute flex flex-col p-5 text-lg gap-5 top-20 right-24 bg-slate-300 z-50 rounded-lg">
					{navbarLinks.map((link) => (
						<Link
							key={link.name}
							href={link.url}
							className="hover:underline hover:underline-offset-4"
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
