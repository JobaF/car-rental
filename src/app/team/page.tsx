import { FC } from "react"
import PageBanner from "@/components/PageBanner"
import teamPicture1 from "../../../public/team/team1.png"
import teamPicture2 from "../../../public/team/team2.png"
import teamPicture3 from "../../../public/team/team3.png"
import teamPicture5 from "../../../public/team/team5.png"
import teamPicture4 from "../../../public/team/team4.png"
import teamPicture6 from "../../../public/team/team6.png"
import { StaticImageData } from "next/image"
import TeamCard from "./TeamCard"
import Banner2 from "@/components/Banner2"

interface pageProps {}
export interface TeamMemberType {
	name: string
	job: string
	image: StaticImageData
}
const page: FC<pageProps> = ({}) => {
	const team: TeamMemberType[] = [
		{
			name: "Luke Miller",
			job: "Salesman",
			image: teamPicture1,
		},
		{
			name: "Michael Diaz",
			job: "Business Owner",
			image: teamPicture2,
		},
		{
			name: "Briana Ross",
			job: "Photographer",
			image: teamPicture3,
		},
		{
			name: "Lauren Rivera",
			job: "Car Detailist",
			image: teamPicture4,
		},
		{
			name: "Martin Rizz",
			job: "Mechanic",
			image: teamPicture5,
		},
		{
			name: "Caitlyn Hunt",
			job: "Manager",
			image: teamPicture6,
		},
	]

	return (
		<div>
			<div className="mx-auto max-w-7xl">
				<PageBanner activeSite="team" />
				<div className="flex justify-around flex-wrap mb-24">
					{team.map((member) => {
						return <TeamCard key={member.name} props={member} />
					})}
				</div>
			</div>
			<Banner2 />
		</div>
	)
}

export default page
