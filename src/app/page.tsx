import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<Stack />
			<Experience />
			<Now />
			<Contact />
		</>
	);
}
