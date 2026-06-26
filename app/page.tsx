import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import InstitucionalBlock from "@/components/home/InstitucionalBlock";
import NewsGrid from "@/components/home/NewsGrid";
import CareersCTA from "@/components/home/CareersCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <InstitucionalBlock />
      <NewsGrid />
      <CareersCTA />
    </>
  );
}
