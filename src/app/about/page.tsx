import PageBanner from "@/components/PageBanner"
import { FC } from "react"
import Image from "next/image"
import Features from "@/components/Features"
import Banner2 from "@/components/Banner2"
import { HOSTNAME_CDN } from "@/utils/constants"

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
	return (
		<div className="">
			<PageBanner activeSite="about" />
			<div className="max-w-7xl mx-auto p-5">
				<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 justify-center">
					<div className="">
						<Image
							src={HOSTNAME_CDN + "about.jpg"}
							width={424}
							height={440}
							alt="about image"
							className="rounded-lg"
						/>
					</div>
					<div className="flex flex-col gap-3 max-w-sm text-center">
						<h2 className="text-2xl mb-1 ">About Company</h2>
						<h1 className="text-5xl font-bold mb-4">
							You start the engine and your adventure begins
						</h1>
						<p className="text-gray-600 text-justify">
							Nam liber tempor cum soluta nobis eleifend option congue nihil
							imperdiet doming id quod mazim placerat facer possim assum. Lorem
							ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat.
						</p>
						<div className="grid grid-cols-3 p-3 items-center">
							<div className="flex flex-col items-center">
								<Image
									src={HOSTNAME_CDN + "aboutIcon1.png"}
									width={64}
									height={64}
									alt="about icon 1"
									className="h-16 object-contain"
								/>
								<div className="flex gap-3 items-center mt-3">
									<p className="text-xl ">
										<span className="font-bold text-2xl">20</span> Car Types
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center">
								<Image
									src={HOSTNAME_CDN + "aboutIcon2.png"}
									width={64}
									height={64}
									alt="about icon 2"
									className="h-16 object-contain"
								/>
								<div className="flex gap-3 items-center mt-3">
									<p className="text-xl ">
										<span className="font-bold text-2xl">85</span> Rental
										Outlets
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center">
								<Image
									src={HOSTNAME_CDN + "aboutIcon3.png"}
									width={64}
									height={64}
									alt="about icon 3"
									className="h-16 object-contain"
								/>
								<div className="flex gap-3 items-center mt-3">
									<p className="text-xl ">
										<span className="font-bold text-2xl">75</span> Repair Shops
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Features />
			<Banner2 />
		</div>
	)
}

export default About
