import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {

  const [backUp, setBackUp] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100){
        setBackUp(true)
      } else {
        setBackUp(true)
      }
    }, [])
  })

  const getBackUp = () =>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  
  return (
    <>
    <div className='sticky bottom-20 z-10'>
      <button onClick={getBackUp} className="bg-opacity-50 backdrop-blur-lg bg-cool px-5 py-3.5 rounded-full absolute -top-4 right-5 xsm:right-5 md:right-10">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
    <footer className="bg-opacity-80 backdrop-blur-lg bg-accent font-semibold mt-5">       
      <div className="relative container transition-all duration-300 mx-auto flex flex-col items-center justify-between md:px-0 p-10 md:flex-row">
        <Link to="/homepage" className="text-3xl font-bold text-white mt-5 md:mt-0">Ani<span className="text-cool">Net</span></Link>
        <ul className="flex flex-col md:flex-row m-5 items-center justify-between p-2">
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Home</a></li>
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Movies</a></li>
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Series</a></li>
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Bookmark</a></li>
        </ul>
        <p>© AniNet 2023. All Rights Reserved.</p>
      </div>
    </footer>
    
    </>
  )
}

export default Footer