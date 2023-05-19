import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BookingCard from "@/components/BookingCard"
import Features from "@/components/Features"
import VehicleModels from "@/components/VehicleModels"
import Banner from "@/components/Banner"
import ChooseUs from "@/components/ChooseUs"

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<BookingCard />
			<Features />
			<VehicleModels />
			<Banner />
			<ChooseUs />
		</main>
	)
}
