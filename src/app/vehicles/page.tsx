import { FC } from "react"
import PageBanner from "@/components/PageBanner"

interface VehiclesProps {}

const Vehicles: FC<VehiclesProps> = ({}) => {
	return (
		<div className="h-96">
			<PageBanner activeSite="vehicles" />
		</div>
	)
}

export default Vehicles
