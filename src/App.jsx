import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Pages/Home";
import Movies from "./assets/components/Pages/Movies";
import Series from "./assets/components/Pages/Series";
import Bookmark from "./assets/components/Pages/Bookmark";
import Details from "./assets/components/Pages/Details";
import AnimesContext from "./assets/components/Context/AnimeContext";
import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"

function App() {
  return (
    <>
      <AnimesContext>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/details/:mal_id" element={<Details />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </AnimesContext>
    </>
  );
}

export default App;
