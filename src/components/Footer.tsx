"use client"
import { FC } from "react"
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<div className="bg-gray-200">
			<div className="max-w-7xl mx-auto md:grid-cols-4 grid sm:grid-cols-2 grid-cols-1 py-10 px-5 gap-12 md:text-left text-center ">
				<div className="flex gap-3 flex-col pr-5">
					<h1 className="text-2xl font-bold">CAR Rental</h1>
					<p className="text-gray-500">
						We offer a big range of vehicles for all your driving needs. We have
						the perfect car to meet your needs.
					</p>
					<div className="flex items-center gap-2 font-bold justify-center lg:justify-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="black"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
						<p>(123) -456-789</p>
					</div>
					<div className="flex items-center gap-2 font-bold justify-center lg:justify-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						<p>carrental@gmail.com</p>
					</div>
					<a
						href="http://www.xpeedstudios.com"
						className="hover:text-orange-500"
					>
						{" "}
						Design by XpeedStudio
					</a>
				</div>
				<div className="flex flex-col gap-3">
					<h1 className="uppercase text-2xl font-bold">Company</h1>
					<div
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="cursor-pointer"
					>
						New York
					</div>
					<div
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="cursor-pointer"
					>
						Mobile
					</div>
					<div
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="cursor-pointer"
					>
						Blog
					</div>
					<div
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="cursor-pointer"
					>
						How we work
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="uppercase text-2xl font-bold">Working Hours</h1>
					<p>Mon - Fri: 9:00AM - 9:00PM</p>
					<p>Sat: 9:00AM - 19:00PM</p>
					<p>Sun: Closed</p>
				</div>
				<div className="flex flex-col gap-3 shrink-1">
					<h1 className="uppercase text-2xl font-bold">Subscription</h1>
					<p>Subscribe your Email address for latest news & updates.</p>
					<input
						type="text"
						placeholder="Enter Email"
						className="rounded-lg p-2"
					/>
					<button className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-md px-4">
						Submit
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
