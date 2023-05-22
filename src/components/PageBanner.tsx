import { FC } from "react"
import Link from "next/link"
interface PageBannerProps {
	activeSite: string
}

const PageBanner: FC<PageBannerProps> = ({ activeSite }) => {
	return (
		<div className="">
			<div className="p-6 lg:p-3 max-w-7xl mx-auto gap-3 h-72 flex flex-col justify-center">
				<h1 className="text-4xl first-letter:uppercase font-bold">
					{activeSite}
				</h1>
				<div className="first-letter:uppercase flex gap-1 font-bold">
					<Link href="" className="hover:text-orange-500">
						Home
					</Link>
					<span>/</span>
					<p className="first-letter:uppercase">{activeSite}</p>
				</div>
			</div>
		</div>
	)
}

export default PageBanner
