import { FC } from "react"
import Accordion from "./Accordion"
import miniImg from "../../public/mini.png"
import Image from "next/image"

interface FAQProps {}

const FAQ: FC<FAQProps> = ({}) => {
	const accordionData = [
		{
			heading: "1. What is special about comparing rental car deals?",
			text: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
		},
		{
			heading: "2. How do I find the car rental deals?",
			text: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
		},
		{
			heading: "3. How do I find such low rental car prices?",
			text: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
		},
	]

	return (
		<div className="relative mx-auto text-center flex flex-col gap-5 mb-48">
			<div className="px-5 max-w-3xl flex flex-col gap-5 mx-auto mb-8">
				<h2 className="font-bold text-2xl -mb-2">FAQ</h2>
				<h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
				<p className="text-gray-500">
					Frequently Asked Questions About the Car Rental Booking Process on Our
					Website: Answers to Common Concerns and Inquiries.
				</p>
			</div>
			<Accordion data={accordionData} />
			<div className="absolute left-0 top-64 ">
				<Image src={miniImg} alt="mini img" />
			</div>
		</div>
	)
}

export default FAQ
