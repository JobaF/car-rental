import { FC } from "react"

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
	return (
		<div className="w-full bg-gray-950 my-28 text-white py-14 text-center px-5">
			<h1 className="text-5xl text-bold">
				Save big with our cheap car rental!
			</h1>
			<h3 className="text-2xl mt-4">
				Top Airports. Local Suppliers.{" "}
				<span className="text-orange-500">24/7</span> Support.
			</h3>
		</div>
	)
}

export default Banner
