import PageBanner from "@/components/PageBanner"
import { FC } from "react"

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
	return (
		<div className="h-96">
			<PageBanner activeSite="about" />
		</div>
	)
}

export default About
