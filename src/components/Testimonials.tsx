import { FC } from "react"
import TestimonialCard from "./TestimonialCard"
import profilePicture1 from "../../public/profilePicture1.jpg"
import profilePicture2 from "../../public/profilePicture2.jpg"
import type { StaticImageData } from "next/image"

interface TestimonialsProps {}

export interface Testimonial {
	text: string
	profilePicture: StaticImageData
	author: string
	location: string
}

const Testimonials: FC<TestimonialsProps> = ({}) => {
	const testimonials: Testimonial[] = [
		{
			text: '"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."',
			profilePicture: profilePicture1,
			author: "Ryan Florence",
			location: "Dusseldorf",
		},
		{
			text: '"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"',
			profilePicture: profilePicture2,
			author: "Debbie O'Brien",
			location: "Munich",
		},
	]

	return (
		<div className="max-w-7xl mx-auto text-center flex flex-col gap-5 mb-96">
			<div className="px-5 max-w-3xl flex flex-col gap-5 mx-auto">
				<h2 className="font-bold text-2xl -mb-2">Reviewed by people</h2>
				<h1 className="text-5xl font-bold">Client&apos;s Testimonials</h1>
				<p className="text-gray-500">
					Discover the positive impact we&apos;ve made on our clients by reading
					through their testimonials. Our clients have experienced our service
					and results, and they&apos;re eager to share their positive
					experiences with you.
				</p>
			</div>
			<div className="flex gap-6 justify-center mt-8 flex-wrap">
				<TestimonialCard testimonial={testimonials[0]} />
				<TestimonialCard testimonial={testimonials[1]} />
			</div>
		</div>
	)
}

export default Testimonials
