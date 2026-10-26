import ApartmentsFeatured from "../components/apartments/apartments-featured";
import Hero from "../components/home/hero";
import HeroCard from "../components/home/hero-card";

export default function Home() {
  return (

    <>
      <Hero
        title="WHERE EVERY STAY FEELS LIKE ARRIVAL"
        desc="Beautiful design meets quiet functionality, creating spaces that are a pleasure to stay in and hard to forget."
        card={<HeroCard />}
      />
      <ApartmentsFeatured />
    </>
  )
}
