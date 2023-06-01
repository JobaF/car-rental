import { FC } from "react"
import Image from "next/image"
import { HOSTNAME_CDN } from "@/utils/constants"

interface Banner2Props {}

const Banner2: FC<Banner2Props> = ({}) => {
	return (
		<div className="w-full relative text-white py-14 text-center px-5 bg-black overflow-hidden opacity-90 ">
			<Image
				src={HOSTNAME_CDN + "banner2.png"}
				width={1600}
				height={178}
				alt="bannerImage2"
				className="absolute -z-10 top-0 object-fill opacity-20"
			/>
			<Image
				src={HOSTNAME_CDN + "banner2.png"}
				width={1600}
				height={178}
				alt="bannerImage2"
				className="absolute -z-10 right-0 top-0 translate-x-96 object-fill opacity-20"
			/>
			<div className="opacity-100 z-10 flex items-center gap-7 justify-center flex-wrap">
				<h1 className="text-5xl text-bold">
					Book a car by getting in touch with us
				</h1>
				<div className="flex gap-2 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="rgb(249 115 22)"
						className="w-8 h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
						/>
					</svg>
					<p className="text-orange-500 text-3xl">(123) 456-789</p>
				</div>
			</div>
		</div>
	)
}

export default Banner2
