import ApartmentsFeatured from "../components/apartments/apartments-featured";
import Hero from "../components/home/hero";
import HeroCard from "../components/home/hero-card";
import Layout from "../layouts/layout";

export default function Home() {
  return (
    <Layout>
      <Hero
        title="WE SHAPE SPACES FOR TOMORROW"
        desc="We shape spaces for tomorrow by blending visionary design with purposeful functionality creating environments that inspire and endure."
        card={<HeroCard />}
      />
      <ApartmentsFeatured />
    </Layout>
  )
}
