import React from "react";
import HeroSection from "../Sections/HeroSection"
import Trending from "../Sections/Trending"
import LatestAnime from "../Sections/LatestAnime"
import Popular from "../Sections/Popular"

function Home() {
  return (
    <main className="text-primary">
      <HeroSection />
      <Trending />
      <LatestAnime />
      <Popular />
    </main>
  );
}

export default Home;
