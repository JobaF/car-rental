import { FC } from "react"
import Image from "next/image"
import { HOSTNAME_CDN } from "@/utils/constants"

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
	const features = [
		{
			heading: "Select Car",
			text: "We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs!",
			logoPath: HOSTNAME_CDN + "features-logo1.png",
		},
		{
			heading: "Contact Operator",
			text: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns.",
			logoPath: HOSTNAME_CDN + "features-logo2.png",
		},
		{
			heading: "Let's Drive",
			text: "Whether you're hitting the open road, we've got you covered with our wide range of cars.",
			logoPath: HOSTNAME_CDN + "features-logo3.png",
		},
	]

	return (
		<section className="flex flex-col items-center my-24">
			<div className="w-4/6 rounded-xl p-5 max-w-7xl ">
				<h2 className="text-2xl text-center mb-4">Plan your trip now</h2>
				<h1 className="text-4xl text-center font-bold">
					Quick & easy car rental
				</h1>
				<div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-12">
					{features.map((feature) => (
						<div
							key={"feature " + feature.heading}
							className="flex flex-col items-center gap-3 border rounded-lg p-5 shadow-lg"
						>
							<Image
								src={feature.logoPath}
								width={150}
								height={150}
								alt="Logo Select Car"
								className=""
							/>
							<h1 className="text-2xl font-bold text-center">
								{feature.heading}
							</h1>
							<p className="text-md text-center text-slate-600">
								{feature.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Features
