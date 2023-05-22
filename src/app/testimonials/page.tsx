import { FC } from "react"
import PageBanner from "@/components/PageBanner"
import Banner2 from "@/components/Banner2"
import Testimonials from "@/components/Testimonials"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<div>
			<PageBanner activeSite="testimonials" />
			<Testimonials />
			<Banner2 />
		</div>
	)
}

export default page
