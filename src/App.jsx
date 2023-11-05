import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Pages/Home";
import Movies from "./assets/components/Pages/Movies";
import Series from "./assets/components/Pages/Series";
import Bookmark from "./assets/components/Pages/Bookmark";
import Details from "./assets/components/Pages/Details";
import AnimesContext from "./assets/components/Context/AnimeContext";
import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"
import CharacterDetails from "./assets/components/Pages/CharacterDetails";
import ViewAllTopAnime from "./assets/components/Pages/ViewAllTopAnime";
import ViewLatestAnime from "./assets/components/Pages/ViewLatestAnime";
import SearchPage from "./assets/components/Pages/SearchPage";

function App() {
  return (
    <>
      <AnimesContext>
        <Router basename="/AniNet">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/topanime" element={<ViewAllTopAnime />} />
            <Route path="/latestanime" element={<ViewLatestAnime />} />
            <Route path="/details/:mal_id" element={<Details />} />
            <Route path="/characterdetails/:mal_id" element={<CharacterDetails/>} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </AnimesContext>
    </>
  );
}

export default App;
