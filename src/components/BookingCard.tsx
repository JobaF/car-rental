import { FC } from "react"

interface BookingCardProps {}

const BookingCard: FC<BookingCardProps> = ({}) => {
	const cars = [
		"Audi A1",
		"VW Golf 6",
		"Toyota Camry",
		"BMW 320",
		"Mercedes-Benz GLK",
		"VW Passat CC",
	]
	const locations = ["Berlin", "Cologne", "Dusseldorf", "Munich", "Dresden"]

	return (
		<div className="flex flex-col items-center mb-12">
			<div className="w-full md:w-4/6 shadow-xl border border-slate-200 rounded-xl pt-5 max-w-6xl">
				<h2 className="text-3xl text-center font-bold">Book a car</h2>
				<div className="flex gap-5 mt-5 flex-wrap p-5">
					<div className="flex flex-col gap-2 flex-grow basis-36">
						<label className="text-lg">Car Type:</label>
						<select id="car-selection">
							<option value="">Select your car type</option>
							{cars.map((car, i) => (
								<option key={car + i} value={car}>
									{car}
								</option>
							))}
						</select>
					</div>
					<div className="flex flex-col gap-2 flex-grow basis-36">
						<label className="text-lg">Pick Up:</label>
						<select id="pick-up-selection">
							<option value="">Select pick up location</option>
							{locations.map((location, i) => (
								<option key={location + i} value={location}>
									{location}
								</option>
							))}
						</select>
					</div>
					<div className="flex flex-col gap-2 flex-grow basis-36">
						<label className="text-lg">Drop Off:</label>
						<select id="drop-off-selection">
							<option value="">Select drop off location</option>
							{locations.map((location, i) => (
								<option key={location.slice(3) + i} value={location}>
									{location}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="flex gap-5 flex-wrap px-5 items-end pb-5">
					<div className="flex flex-col gap-2 flex-grow basis-36">
						<label className="text-lg">Pick Up Date:</label>
						<select id="car-selection">
							<option value="">Pick Up Date</option>
						</select>
					</div>
					<div className="flex flex-col gap-2 flex-grow basis-36">
						<label className="text-lg">Drop Off Date:</label>
						<select id="pick-up-selection">
							<option value="">Drop Off Date</option>
							{locations.map((location) => (
								<option value={location}>{location}</option>
							))}
						</select>
					</div>
					<div className="flex flex-col gap-2">
						<button className="flex gap-2 px-6 py-3 bg-orange-600 rounded-md lg:w-44 h-12 justify-center items-center w-32 text-lg text-white font-bold">
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookingCard
