import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import Trending from "./components/Sections/Trending"
import LatestAnime from "./components/Sections/LatestAnime"
import Popular from "./components/Sections/Popular"
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-primary">
      <Navbar />
      <HeroSection />
      <Trending />
      <LatestAnime />
      <Popular/>     
      <Footer/>
    </main>
  );
}

export default App;
