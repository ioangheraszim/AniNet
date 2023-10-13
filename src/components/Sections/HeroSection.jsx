import React from 'react'

function HeroSection() {
  return (
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
  )
}

export default HeroSection