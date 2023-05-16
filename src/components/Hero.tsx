import { FC } from "react"
import Image from "next/image"
import carHero from "../../public/car-hero.png"
import heroBg from "../../public/hero-bg.png"

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	return (
		<section className="min-h-[90vh] h-full flex flex-col justify-center items-center">
			<div className="flex flex-col lg:flex-row">
				<Image
					src={heroBg}
					alt="bg-hero"
					className="absolute -z-10 top-0 right-0 hidden lg:block"
				/>
				<div className="flex flex-col justify-center p-4 mb-12 lg:mb-0 lg:text-left text-center">
					<div className="font-bold text-2xl mb-3">Plan your trip now</div>
					<div className="text-6xl font-extrabold mb-9">
						Save <span className=" text-orange-600">big</span> with our <br />{" "}
						car rental
					</div>
					<div className="mb-9 text-slate-600">
						Rent the car of your dreams. Unbeatable prices,
						<br /> unlimited miles, flexible pick-up options and much more.
					</div>
					<div className="flex gap-5 lg:flex-row flex-col items-center lg:justify-start justify-center text-white font-bold">
						<button className="flex gap-2 px-6 py-3 bg-orange-600 rounded-md lg:w-44 h-16 justify-center items-center w-56">
							Book Ride
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
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</button>
						<button className="flex gap-2 px-6 py-3 bg-black  rounded-md h-16 justify-center items-center lg:w-44 w-56">
							Learn more
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
				</div>
				<div className="hidden lg:block">
					<Image src={carHero} alt="hero car image" className="col-span-2" />
				</div>
			</div>
		</section>
	)
}

export default Hero
