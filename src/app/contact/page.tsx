import { FC } from "react"
import PageBanner from "@/components/PageBanner"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<div>
			<PageBanner activeSite="contact" />
		</div>
	)
}

export default page
