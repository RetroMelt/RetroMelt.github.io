import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import NewLaunches from "@/components/home/NewLaunches";
import MemoryCategories from "@/components/home/MemoryCategories";
import NostalgiaStatement from "@/components/home/NostalgiaStatement";
import EventsTeaser from "@/components/home/EventsTeaser";
import MemoryWallTeaser from "@/components/home/MemoryWallTeaser";
import InstagramSection from "@/components/home/InstagramSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <NewLaunches />
      <MemoryCategories />
      <NostalgiaStatement />
      <EventsTeaser />
      <MemoryWallTeaser />
      <InstagramSection />
      <ContactCTA />
    </>
  );
}
