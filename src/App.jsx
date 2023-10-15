
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Navbar from "./components/Navbar";


function App() {
  
  return (
    <main className="text-primary  -z-20">
      {/* Navbar */}
     <Navbar/>
      {/* Hero Section */}
      <section className="container mx-auto flex justify-center -z-10 p-5">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
        <div className="carousel-image">
            <img className="w-full" src="https://images6.alphacoders.com/785/thumb-1920-785425.png" alt="image" />
            <p className="carousel-text">Fate Stay Night</p>
        </div>
        <div className="carousel-image">
            <img src="https://assets1.ignimgs.com/thumbs/userUploaded/2021/10/12/demonslayerkimetsunoyaibathehinokamichroniclesblogroll-1634105238950.jpg" alt="image" />
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
