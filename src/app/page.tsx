import Hero from "@/components/Hero"
import BookingCard from "@/components/BookingCard"
import Features from "@/components/Features"
import VehicleModels from "@/components/VehicleModels"
import Banner from "@/components/Banner"
import ChooseUs from "@/components/ChooseUs"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import AppDownload from "@/components/AppDownload"

export default function Home() {
	return (
		<>
			<Hero />
			<BookingCard />
			<Features />
			<VehicleModels />
			<Banner />
			<ChooseUs />
			<Testimonials />
			<FAQ />
			<AppDownload />
		</>
	)
}
