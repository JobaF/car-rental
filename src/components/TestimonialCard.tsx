import { FC } from "react"
import { Testimonial } from "./Testimonials"
import Image from "next/image"

interface TestimonialCardProps {
	testimonial: Testimonial
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
	return (
		<div className="max-w-lg w-5/6 flex flex-col items-center py-3 md:py-6 px-4 md:px-12 rounded-md shadow-xl border">
			<p className="text-lg md:text-2xl"> {testimonial.text}</p>
			<div className="flex items-center justify-between gap-3 w-full mt-4">
				<div className="flex gap-3 items-center">
					<div className="w-16 h-16 rounded-full overflow-hidden">
						<Image
							src={testimonial.profilePicture}
							alt={`profile picture ${testimonial.author}`}
						/>
					</div>
					<div>
						<div className="font-bold text-md md:text-lg">
							{testimonial.author}
						</div>
						<div className="text-md md:text-lg">{testimonial.location}</div>
					</div>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className="w-16 h-16 md:w-20 md:h-20"
					fill="#ff6630"
				>
					<path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
				</svg>
			</div>
		</div>
	)
}

export default TestimonialCard
