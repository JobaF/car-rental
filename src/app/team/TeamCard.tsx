import { FC } from "react"
import { TeamMemberType } from "./page"
import Image from "next/image"

interface TeamCardProps {
	props: TeamMemberType
}

const TeamCard: FC<TeamCardProps> = ({ props }) => {
	return (
		<div className="flex flex-col border w-96 p-3 rounded-md shadow-lg mb-8 text-center">
			<div>
				<Image src={props.image} alt={props.name + " image"} className="" />
			</div>
			<p className="font-bold text-4xl mt-4">{props.name}</p>
			<p className="text-gray-500 text-xl m-2">{props.job}</p>
		</div>
	)
}

export default TeamCard
