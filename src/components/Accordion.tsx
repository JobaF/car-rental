"use client"
import { FC, MouseEventHandler, useState } from "react"

interface AccordionProps {
	data: AccordionData[]
}

interface AccordionData {
	heading: string
	text: string
}

const Accordion: FC<AccordionProps> = ({ data }) => {
	const [expandedItem, setExpandedItem] = useState<number | null>(null)

	const handleAccordionClick = (id: number) => {
		if (expandedItem !== id) {
			setExpandedItem((prev) => id)
		} else setExpandedItem(null)
	}

	return (
		<div className="z-20 max-w-4xl w-5/6 mx-auto shadow-customAccordion bg-white rounded-md">
			{data?.map((item, i) => (
				<div key={item.heading.slice(0, 5)}>
					{/* Heading */}
					<div
						onClick={() => handleAccordionClick(i)}
						className={`flex justify-between px-7 py-5 cursor-pointer gap-3 ${
							expandedItem === i
								? "bg-orange-500 text-white shadow-customAccordion"
								: ""
						}`}
					>
						<p className="text-xl select-none">{item.heading}</p>
						{expandedItem === i ? (
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
									d="M4.5 15.75l7.5-7.5 7.5 7.5"
								/>
							</svg>
						) : (
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
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						)}
					</div>

					<div
						className={`text-justify text-gray-500 overflow-hidden ease-in-out transition-all  ${
							expandedItem === i
								? "max-h-96 shadow-customAccordion"
								: "opacity-0 max-h-0 leading-none"
						} duration-300`}
					>
						<div className="px-7 py-5 ">{item.text}</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Accordion
