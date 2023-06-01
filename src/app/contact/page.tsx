import { FC } from "react"
import PageBanner from "@/components/PageBanner"
import Image from "next/image"
import { HOSTNAME_CDN } from "@/utils/constants"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<div>
			<PageBanner activeSite="contact" />
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 ">
				<Image
					src={HOSTNAME_CDN + "cologne.jpg"}
					width={1280}
					height={272}
					alt="google maps cologne"
					className="h-72 object-cover mx-auto mt-4 mb-8 md:col-span-2 p-3"
				/>
				<div className="flex flex-col gap-4 mb-24 p-3 md:items-start items-center md:text-left text-center">
					<h1 className="text-4xl font-bold">Need additional information?</h1>
					<p className="text-gray-500 max-w-sm">
						A multifaceted professional skilled in multiple fields of research,
						development as well as a learning specialist. Over 15 years of
						experience.
					</p>
					<div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
						<p className="text-lg">(123) 456-789</p>
					</div>
					<div className="flex items-center gap-2 -mt-2 hover:text-orange-500 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						<p className="text-lg">carrental@gmail.com</p>
					</div>
					<div className="flex items-center gap-2 -mt-2 hover:text-orange-500 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						<p className="text-lg">Cologne</p>
					</div>
				</div>
				<div className="flex flex-col p-3 pl-8 mb-12">
					<label htmlFor="" className="text-lg">
						Full Name <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="ml-2 p-1  rounded-md border border-gray-300 shadow-md mt-2"
						placeholder='E.g. "Joe Shmoe"'
					/>
					<label htmlFor="" className="text-lg mt-4">
						Email <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="ml-2 p-1  rounded-md border border-gray-300 shadow-md mt-2"
						placeholder="youremail@example.com"
					/>
					<label htmlFor="" className="text-lg mt-4">
						Tell us about it <span className="text-red-500">*</span>
					</label>
					<textarea
						name="Text1"
						className="p-1  mt-2 ml-2 rounded-md border border-gray-300 shadow-md"
						cols={40}
						rows={3}
						placeholder="Write here..."
					></textarea>
					<button className="bg-orange-500 text-white hover:bg-orange-600 p-4 rounded-md mt-4 flex justify-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
							/>
						</svg>
						Send Message
					</button>
				</div>
			</div>
		</div>
	)
}

export default page
