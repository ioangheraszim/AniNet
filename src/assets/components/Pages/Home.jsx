import HeroSection from "../Sections/HeroSection";
import LatestAnime from "../Sections/LatestAnime";
import Popular from "../Sections/Popular";

function Home() {
  return (
    <main className="text-primary relative">
      <HeroSection />
      <LatestAnime />
      <Popular />
    </main>
  );
}

export default Home;
