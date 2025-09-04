import { useContext, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AnimeContext } from "../Context/AnimeContext";
import { Link } from "react-router-dom";

function HeroSection() {
  const { fullAnime, fetchFullAnimeById } = useContext(AnimeContext);

  useEffect(() => {
    fetchFullAnimeById();
  }, [fullAnime]);

  return (
    <section className="container transition-all duration-300 mx-auto flex items-center justify-between">
      <div className="container mx-auto flex justify-center p-5">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div className="relative">
            <img
              className="w-full h-full"
              src="https://images6.alphacoders.com/785/thumb-1920-785425.png"
              alt="image"
            />
            <div className="absolute left-5 bottom-0 sm:left-5 md:left-10 flex flex-col md:justify-start">
              <p className="text-start text-[1.3rem] sm:text-start sm:text-[2rem] lg:text-[3rem] font-bold font-oswald text-shadow">
                Fate/stay night: Unlimited Blade Works
              </p>
              <p className="text-shadow hidden sm:block bg-gen bg-opacity-50 bg-blur-lg mr-7 text-start">
                In Fuyuki City, the Fifth Holy Grail War is about to commence a
                lengthy battle of blood, death, and misery. High school student
                Rin Toosaka has trained her entire life for this moment...
              </p>
              <Link
                aria-label="More Info"
                to="/details/6922"
                className="bg-accent hover:bg-gen hover:bg-blur hover:bg-opacity-50 sm:w-1/4 md:w-1/4 md:text-base lg:w-1/3 p-1 w-1/3 sm:p-3 mb-10 sm:mt-5 md:mt-10 bg-blur bg-opacity-50 rounded-lg text-lg"
              >
                More Info
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full"
              src="https://assets1.ignimgs.com/thumbs/userUploaded/2021/10/12/demonslayerkimetsunoyaibathehinokamichroniclesblogroll-1634105238950.jpg"
              alt="image"
            />
            <div className="absolute left-5 bottom-0 sm:left-5 md:left-10 flex flex-col md:justify-start">
              <p className="text-center text-[1.3rem] sm:text-start sm:text-[2rem] lg:text-[3rem] font-bold font-oswald text-shadow">
                Kimetsu no Yaiba
              </p>
              <p className="text-shadow hidden text-start sm:block bg-gen bg-opacity-50 bg-blur-lg mr-7">
                Ever since the death of his father, the burden of supporting the
                family has fallen upon Tanjirou Kamado's shoulders. Though
                living impoverished on a remote mountain
              </p>
              <Link
                aria-label="More Info"
                to="/details/38000"
                className="bg-accent hover:bg-gen hover:bg-blur hover:bg-opacity-50 sm:w-1/4 md:w-1/4 md:text-base lg:w-1/3 p-3 mb-10 sm:mt-5 md:mt-10 bg-blur bg-opacity-50 rounded-lg text-lg"
              >
                More info
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full"
              src="https://i.pinimg.com/originals/c6/fb/5c/c6fb5cd7b9864c767a19a2626fec44dd.jpg"
              alt="image"
            />
            <div className="absolute left-5 bottom-0 sm:left-5 md:left-10 flex flex-col md:justify-start">
              <p className="text-center text-[1.3rem] sm:text-start sm:text-[2rem] lg:text-[3rem] font-bold font-oswald text-shadow">
                My Hero Academia
              </p>
              <p className="text-shadow hidden sm:block shadow-md bg-gen bg-opacity-50 bg-blur-lg mr-7 text-start">
                The appearance of "quirks," newly discovered super powers, has
                been steadily increasing over the years...
              </p>
              <Link
                aria-label="More Info"
                to="/details/31964"
                className="bg-accent hover:bg-gen hover:bg-blur hover:bg-opacity-50 sm:w-1/4 md:w-1/4 md:text-base lg:w-1/3 p-3 mb-10 sm:mt-5 md:mt-10 bg-blur bg-opacity-50 rounded-lg text-lg"
              >
                More info
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default HeroSection;
