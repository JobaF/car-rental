import { FC } from "react"
import PageBanner from "@/components/PageBanner"
import TeamCard from "./TeamCard"
import Banner2 from "@/components/Banner2"
import { HOSTNAME_CDN } from "@/utils/constants"

interface pageProps {}
export interface TeamMemberType {
	name: string
	job: string
	imagePath: string
}
const page: FC<pageProps> = ({}) => {
	const team: TeamMemberType[] = [
		{
			name: "Luke Miller",
			job: "Salesman",
			imagePath: HOSTNAME_CDN + "team/team1.png",
		},
		{
			name: "Michael Diaz",
			job: "Business Owner",
			imagePath: HOSTNAME_CDN + "team/team2.png",
		},
		{
			name: "Briana Ross",
			job: "Photographer",
			imagePath: HOSTNAME_CDN + "team/team3.png",
		},
		{
			name: "Lauren Rivera",
			job: "Car Detailist",
			imagePath: HOSTNAME_CDN + "team/team4.png",
		},
		{
			name: "Martin Rizz",
			job: "Mechanic",
			imagePath: HOSTNAME_CDN + "team/team5.png",
		},
		{
			name: "Caitlyn Hunt",
			job: "Manager",
			imagePath: HOSTNAME_CDN + "team/team6.png",
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
