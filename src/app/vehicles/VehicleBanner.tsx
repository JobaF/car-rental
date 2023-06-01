import { FC } from "react"
import CarIcon from "./CarIcon"
import DoorIcon from "./DoorIcon"
import SeatIcon from "./SeatIcon"
import StarIcon from "./StarIcon"
import Image from "next/image"
import FuelIcon from "./FuelIcon"
import { CarsType } from "@/components/VehicleModels"

interface VehicleBannerProps {
	props: CarsType
}

const VehicleBanner: FC<VehicleBannerProps> = ({ props }) => {
	return (
		<div className="w-96 rounded-md overflow-hidden shadow-md border m-4">
			<div className="">
				<Image
					src={props.picturePath}
					width={382}
					height={256}
					alt="banner image"
					className="h-64 object-cover"
				/>
			</div>
			<div className="flex flex-col w-full pt-4 px-4 pb-4">
				<div className="flex justify-between">
					<h1 className="text-2xl font-bold">{props.name}</h1>
					<h1 className="text-2xl font-bold">${props.rentCostPerDay}</h1>
				</div>
				<div className="flex justify-between">
					<span className="flex">
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</span>
					<p className="">per day</p>
				</div>
				<div className="flex justify-between mt-4">
					<div className="flex items-center gap-3">
						<CarIcon />
						<p className="text-lg">{props.mark}</p>
					</div>
					<div className="flex items-center gap-3">
						<p className="text-lg">{props.doors}</p>
						<DoorIcon />
					</div>
				</div>
				<div className="flex justify-between mt-2 mb-4">
					<div className="flex items-center gap-3">
						<SeatIcon />
						<p className="text-lg">{5} Seats</p>
					</div>
					<div className="flex items-center gap-3">
						<p className="text-lg first-letter:uppercase">{props.fuel}</p>
						<FuelIcon />
					</div>
				</div>
				<hr />
				<button className="self-center w-1/2 bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-md px-4 mt-4 text-xl">
					Book Ride
				</button>
			</div>
		</div>
	)
}

export default VehicleBanner
