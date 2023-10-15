import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="bg-opacity-80 backdrop-blur-lg bg-accent font-semibold relative">       
      <div className="container transition-all duration-300 mx-auto flex flex-col items-center justify-between p-10 md:flex-row">
        <div className="bg-cool px-5 py-3.5 rounded-full absolute -top-4 md:right-10 scroll-smooth">
          <a href="#"><FontAwesomeIcon icon={faArrowUp} /></a> 
        </div>
        <a href="#" className="text-3xl font-bold text-white mt-5 md:mt-0">Ani<span className="text-cool">Net</span></a>
        <ul className="flex flex-col md:flex-row m-5 items-center justify-between p-2">
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Home</a></li>
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Movies</a></li>
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Series</a></li>
            <li className="m-5"><a href="#" className="hover:bg-cool bg-opacity-40 p-4 rounded">Bookmark</a></li>
        </ul>
        <p>© AniNet 2023. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer