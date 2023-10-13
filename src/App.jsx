import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHouse, faMagnifyingGlass, faTv, faBars} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


function App() {
  return (
    <main className="text-primary bg-background">
      {/* Navbar */}
      <header className="bg-opacity-80 backdrop-blur-lg bg-accent font-semibold">
      <nav className="p-4">
        <div className="container transition-all duration-300 mx-auto flex items-center justify-between">
          <a href="#" className="text-3xl font-bold text-white">Ani<span className="text-cool">Net</span></a>
          <ul class="hidden md:flex space-x-4 md:items-center md:justify-center md:flex-grow">
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-5 rounded"><FontAwesomeIcon icon={faHouse} /></a></li>
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-5 rounded"><FontAwesomeIcon icon={faTv} /></a></li>
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-5 rounded"><FontAwesomeIcon icon={faFilm} /></a></li>
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-5 rounded"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
          <div class="hidden md:flex space-x-4">
            <button className="bg-white bg-opacity-40 rounded p-2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <div class="md:hidden flex items-center space-x-4">
            <button className="bg-white bg-opacity-40 rounded p-2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <button className="bg-white bg-opacity-40 rounded p-2"><FontAwesomeIcon icon={faBars} /></button>
          </div>
        </div>
      </nav>
      </header>
      {/* Hero Section */}
      <section className="container transition-all duration-300 mx-auto flex items-center justify-between">
       <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
        <div className="carousel-image">
            <img className="w-full" src="https://images6.alphacoders.com/785/thumb-1920-785425.png" alt="image" />
            <p className="carousel-text">Fate Stay Night</p>
        </div>
        <div className="carousel-image">
            <img src="https://wallpapers.com/images/hd/demon-slayer-4k-pictures-5v5lz47uso2tx2kr.jpg" alt="image" />
            <p className="carousel-text">Demon Slayer</p>
        </div>
        <div className="carousel-image">
            <img src="https://i.pinimg.com/originals/c6/fb/5c/c6fb5cd7b9864c767a19a2626fec44dd.jpg" alt="image" />
            <p className="carousel-text">My Hero Academi</p>
        </div>
       </Carousel>
      </section>  
      {/* Trending */}

      {/* Popular */}

      {/* New */}

      {/* Live Action */}
     
    </main>
  );
}

export default App;
