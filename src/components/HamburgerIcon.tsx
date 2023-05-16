import { FC } from "react"

interface HamburgerIconProps {
	onClick: () => void
	isOpen: boolean
}

const HamburgerIcon: FC<HamburgerIconProps> = ({ onClick, isOpen }) => {
	return (
		<svg
			id="hamburger-button"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="black"
			className={`${
				isOpen ? "bg-slate-300" : ""
			} w-12 h-12 block lg:hidden cursor-pointer rounded-full p-1 hover:bg-slate-400`}
			onClick={onClick}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	)
}

export default HamburgerIcon