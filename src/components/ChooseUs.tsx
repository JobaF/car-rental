import { FC } from "react"
import chooseHero from "../../public/chooseHero.png"
import chooseUsIcon1 from "../../public/chooseUsIcon1.png"
import chooseUsIcon2 from "../../public/chooseUsIcon2.png"
import chooseUsIcon3 from "../../public/chooseUsIcon3.png"
import Image from "next/image"

interface ChooseUsProps {}

const ChooseUs: FC<ChooseUsProps> = ({}) => {
	return (
		<div className="flex justify-center items-center mb-48 flex-col text-center md:text-left">
			<Image src={chooseHero} alt="choose us hero" />
			{/* Text container */}
			<div className="flex justify-center w-full p-5 flex-wrap gap-12">
				<div className="flex flex-col gap-6 md:gap-3 max-w-xl mb-12 lg:mb-0 justify-around">
					<h3 className="font-bold text-2xl -mb-4 lg:-mb-6">Why Choose Us</h3>
					<h1 className="text-5xl font-bold">
						Best valued deals you will ever find
					</h1>
					<p className="text-gray-500">
						Discover the best deals you'll ever find with our unbeatable offers.
						We're dedicated to providing you with the best value for your money,
						so you can enjoy top-quality services and products without breaking
						the bank. Our deals are designed to give you the ultimate renting
						experience, so don't miss out on your chance to save big.
					</p>
					<button className="self-center lg:self-start text-white font-bold flex gap-2 bg-orange-500 rounded-md h-16 justify-center items-center w-44 shadow-md shadow-orange-500 hover:bg-orange-500">
						Find Details
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
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
				<div className="flex flex-col gap-12 max-w-xl">
					<div className="flex items-center flex-col lg:flex-row gap-3 max-w-md">
						<Image src={chooseUsIcon1} alt={"choose us icon 1"} />

						<div>
							<h2 className="font-bold text-2xl mb-2">Cross Country Drive</h2>{" "}
							<p className="text-gray-500">
								Take your driving experience to the next level with our
								top-notch vehicles for your cross-country adventures.
							</p>
						</div>
					</div>
					<div className="flex items-center flex-col lg:flex-row gap-3 max-w-md">
						<Image src={chooseUsIcon2} alt={"choose us icon 2"} />
						<div>
							<h2 className="font-bold text-2xl mb-2">All Inclusive Pricing</h2>{" "}
							<p className="text-gray-500">
								Get everything you need in one convenient, transparent price
								with our all-inclusive pricing policy.
							</p>
						</div>
					</div>
					<div className="flex items-center flex-col lg:flex-row gap-3 max-w-md">
						<Image src={chooseUsIcon3} alt={"choose us icon 3"} />
						<div>
							<h2 className="font-bold text-2xl mb-2">No Hidden Charges</h2>{" "}
							<p className="text-gray-500">
								Enjoy peace of mind with our no hidden charges policy. We
								believe in transparent and honest pricing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseUs
