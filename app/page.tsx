import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/Searchbar";
import Vision from "@/components/Vision";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Opportunities from "@/components/Opportunities";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Vision />
      <Portfolio />
      <Stats />
      <Opportunities />
      <AppSection />
      <Footer />
    </>
  );
}