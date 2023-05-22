import { FC } from "react"
import Image from "next/image"
import androidPicture from "../../public/googleplaybadge.png"
import appstorePicture from "../../public/appstorebadge.png"

interface AppDownloadProps {}

const AppDownload: FC<AppDownloadProps> = ({}) => {
	return (
		<div
			className="grid grid-cols-1 max-w-7xl mx-auto mb-48"
			style={{
				backgroundImage: 'url("/bg-download.png")',
				backgroundPosition: "top",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="flex flex-col gap-8 p-5 max-w-2xl bg-white">
				<h1 className="lg:text-5xl text-4xl font-bold">
					Download our app to get the most out of it
				</h1>
				<p className="text-gray-500">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
					sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum.
				</p>
				<div className="flex justify-start gap-8">
					<div className="cursor-pointer">
						<Image src={androidPicture} alt="android download picture" />
					</div>
					<div className="cursor-pointer">
						<Image src={appstorePicture} alt="android download picture" />
					</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default AppDownload
