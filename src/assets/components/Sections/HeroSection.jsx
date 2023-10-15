import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

function HeroSection() {
  return (
    <section className="container transition-all duration-300 mx-auto flex items-center justify-between">
       <section className="container mx-auto flex justify-center p-5">
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
    </section>  
  )
}

export default HeroSection