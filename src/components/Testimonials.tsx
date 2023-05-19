import { FC } from "react"

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
	return (
		<div className=" max-w-7xl mx-auto text-center flex flex-col gap-5 mb-96">
			<div className="max-w-3xl  flex flex-col gap-5 mx-auto">
				<h2 className="font-bold text-2xl -mb-2">Reviewed by people</h2>
				<h1 className="text-5xl font-bold">Client&apos;s Testimonials</h1>
				<p className="text-gray-500">
					Discover the positive impact we&apos;ve made on our clients by reading
					through their testimonials. Our clients have experienced our service
					and results, and they&apos;re eager to share their positive
					experiences with you.
				</p>
			</div>
		</div>
	)
}

export default Testimonials
