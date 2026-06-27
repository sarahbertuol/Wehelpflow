import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import BigStatement from "@/components/home/BigStatement";
import InstitucionalBlock from "@/components/home/InstitucionalBlock";
import FullWidthCTA from "@/components/home/FullWidthCTA";
import NewsGrid from "@/components/home/NewsGrid";
import CareersCTA from "@/components/home/CareersCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <BigStatement />
      <InstitucionalBlock />
      <FullWidthCTA />
      <NewsGrid />
      <CareersCTA />
    </>
  );
}
