import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import EmployerGrid from "@/components/EmployerGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Highlights />
      <EmployerGrid />
      <Footer />
    </main>
  );
}
