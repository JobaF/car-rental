import { FC } from "react"

interface CarIconProps {}

const CarIcon: FC<CarIconProps> = ({}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="w-4 h-4"
			viewBox="0 0 16 14"
		>
			<path
				d="M14.794,5.166l-1.122-3.74A1.988,1.988,0,0,0,11.756,0H4.244A1.988,1.988,0,0,0,2.328,1.426L1.206,5.166A2,2,0,0,0,0,7v4a1,1,0,0,0,1,1H1v1a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V12h8v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V12h0a1,1,0,0,0,1-1V7a2,2,0,0,0-1.206-1.834ZM4.244,2h7.512l.9,3H3.344l.9-3ZM4,9.5a1,1,0,1,1,1-1A1,1,0,0,1,4,9.5Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,12,9.5Z"
				fill="#010103"
			></path>
		</svg>
	)
}

export default CarIcon
