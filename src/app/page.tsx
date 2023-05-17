import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BookingCard from "@/components/BookingCard"
import Features from "@/components/Features"

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<BookingCard />
			<Features />
		</main>
	)
}
