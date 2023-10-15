import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Pages/Home";
import Movies from "./assets/components/Pages/Movies";
import Series from "./assets/components/Pages/Series";
import Bookmark from "./assets/components/Pages/Bookmark";
import Details from "./assets/components/Pages/Details";

import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/homepage" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/bookmark" element={<Bookmark />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
