import { FC } from "react"
import PageBanner from "@/components/PageBanner"
import VehicleBanner from "./VehicleBanner"
import toyotaImageVehicles from "../../../public/vehicleModels/toyotaVehicleModels.jpg"
import audiImageVehicles from "../../../public/vehicleModels/audiVehicleModels.jpg"
import passatImageVehicles from "../../../public/vehicleModels/passatVehicleModels.jpg"
import benzImageVehicles from "../../../public/vehicleModels/benzVehicleModels.jpg"
import golfImageVehicles from "../../../public/vehicleModels/golfVehicleModels.jpg"
import bmwImageVehicles from "../../../public/vehicleModels/bmwVehicleModels.jpg"
import { CarsType } from "@/components/VehicleModels"
import Banner2 from "@/components/Banner2"

interface VehiclesProps {}

const Vehicles: FC<VehiclesProps> = ({}) => {
	const cars: CarsType[] = [
		{
			name: "Audi A1",
			picture: audiImageVehicles,
			model: "Audi",
			mark: "A1",
			year: "2012",
			doors: "4/5",
			ac: "Yes",
			transmission: "manual",
			fuel: "gasoline",
			rentCostPerDay: 45,
		},
		{
			name: "VW Golf 6",
			picture: golfImageVehicles,
			model: "Golf 6",
			mark: "Volkswagen",
			year: "2008",
			doors: "4/5",
			ac: "Yes",
			transmission: "manual",
			fuel: "diesel",
			rentCostPerDay: 37,
		},
		{
			name: "Toyota Camry",
			picture: toyotaImageVehicles,
			model: "Camry",
			mark: "Toyota",
			year: "2008",
			doors: "4/5",
			ac: "Yes",
			transmission: "automatic",
			fuel: "hybrid",
			rentCostPerDay: 30,
		},
		{
			name: "BMW 320 ModernLine",
			picture: bmwImageVehicles,
			model: "320",
			mark: "BMW",
			year: "2012",
			doors: "4/5",
			ac: "Yes",
			transmission: "manual",
			fuel: "diesel",
			rentCostPerDay: 35,
		},
		{
			name: "Mercedes-Benz GLK",
			picture: benzImageVehicles,
			model: "Benz GLK",
			mark: "Mercedes",
			year: "2006",
			doors: "4/5",
			ac: "Yes",
			transmission: "manual",
			fuel: "diesel",
			rentCostPerDay: 50,
		},
		{
			name: "VW Passat CC",
			picture: passatImageVehicles,
			model: "Passat CC",
			mark: "Volkswagen",
			year: "2008",
			doors: "4/5",
			ac: "Yes",
			transmission: "automatic",
			fuel: "gasoline",
			rentCostPerDay: 25,
		},
	]

	return (
		<div className="mx-auto max-w-7xl">
			<PageBanner activeSite="vehicles" />
			<div className="flex justify-around flex-wrap mb-24">
				{cars.map((car, i) => (
					<div key={car.model + i}>
						<VehicleBanner props={car} />
					</div>
				))}
			</div>
			<Banner2 />
		</div>
	)
}

export default Vehicles
