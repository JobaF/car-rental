"use client"
import { FC, useState } from "react"
import Image from "next/image"
import { HOSTNAME_CDN } from "@/utils/constants"

interface VehicleModelsProps {}

export type CarsType = {
	name: string
	picturePath: string
	model: string
	mark: string
	year: string
	doors: string
	ac: string
	transmission: string
	fuel: string
	rentCostPerDay: number
}

const VehicleModels: FC<VehicleModelsProps> = ({}) => {
	const cars: CarsType[] = [
		{
			name: "Audi A1 S-Line",
			picturePath: "audia1.jpg",
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
			picturePath: "golf6.jpg",
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
			picturePath: "toyotacamry.jpg",
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
			picturePath: "bmw320.jpg",
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
			picturePath: "benz.jpg",
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
			picturePath: "passatcc.jpg",
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

	const [selectedCar, setSelectedCar] = useState(cars[0])

	return (
		<section className="flex flex-col items-center my-24">
			<div className="w-5/6 rounded-xl p-5 max-w-7xl text-center">
				<h2 className="text-2xl mb-1">Vehicle models</h2>
				<h1 className="text-4xl font-bold mb-4">Our rental fleet</h1>
				<p className="text-slate-600">
					Choose from a variety of our amazing vehicles to rent for your next{" "}
					<br />
					adventure or business trip
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-8">
					{/* Car selection */}
					<div className="flex flex-col gap-2 items-center mb-4 md:mb-0">
						{cars.map((car, i) => (
							<div
								key={car.model + i}
								className={`text-lg font-bold w-3/4 md:w-full flex-grow flex items-center justify-center cursor-pointer ${
									selectedCar.name === car.name
										? "bg-orange-500 text-white"
										: "hover:bg-orange-500 hover:text-white bg-gray-300"
								}`}
								onClick={() => setSelectedCar(cars[i])}
							>
								{car.name}
							</div>
						))}
					</div>
					{/* Car picture - span 2 */}
					<div className="lg:col-span-3 flex justify-center object-cover items-center mb-4 md:mb-0">
						{
							<Image
								className="object-contain "
								src={HOSTNAME_CDN + selectedCar.picturePath}
								width={550}
								height={300}
								alt={selectedCar.name}
							/>
						}
					</div>
					{/* Properties */}
					<div className="flex flex-col items-center">
						<div className="text-lg font-bold w-3/4 md:w-full md:h-14 h-8 bg-orange-500 text-white flex justify-center items-center">
							<span className="text-xl pr-2">
								{"$" + selectedCar.rentCostPerDay}
							</span>{" "}
							/ per day
						</div>
						<div className="mt-4 rounded-lg border p-2 gap-3 flex flex-col border-gray-400 shadow-xl w-3/4 md:w-full">
							{Object.entries(selectedCar)
								.slice(1, -1)
								.filter((item) => item[0] !== "picturePath")
								.map((item) => (
									<div
										className="grid grid-cols-2 justify-center items-center "
										key={selectedCar.name + item[0]}
									>
										<div className="first-letter:uppercase">
											{item[0] as String}
										</div>
										<div className="first-letter:uppercase">
											{item[1] as String}
										</div>
									</div>
								))}
						</div>
						<button
							className="w-3/4 md:w-full text-lg font-bold h-14 flex items-center justify-center cursor-pointer uppercase bg-orange-500 text-white mt-4 hover:bg-orange-700"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						>
							Reserve now
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default VehicleModels
