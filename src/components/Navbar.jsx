import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHouse, faMagnifyingGlass, faTv, faBars, faXmark, faBookmark} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <header className="bg-opacity-80 backdrop-blur-lg bg-accent font-semibold z-10 relative">
      <nav className="p-4">
        <div className="container transition-all duration-300 mx-auto flex items-center justify-between">
          <a href="#" className="text-3xl font-bold text-white">Ani<span className="text-cool">Net</span></a>
          <ul className={`${toggleNav ? "flex flex-col absolute top-0 right-0 rounded-br-lg rounded-bl-lg justify-around items-center h-[32rem] bg-opacity-80 backdrop-blur-lg bg-accent font-semibold md:hidden transition-all duration-300 w-20 z-10" : "overflow-hidden h-0 p-0 m-0 z-10"} md:h-14 md:flex md:transition-all md:duration-300 space-x-4 md:items-center md:justify-center md:flex-grow`} style={{ zIndex: 1090 }}>
            <li><button className={`${toggleNav ? "" : "hidden"} hover:bg-cool px-4 rounded`} onClick={handleNav}><FontAwesomeIcon icon={faXmark} /></button></li>
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faHouse} /></a></li>
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faTv} /></a></li>
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faFilm} /></a></li>
            <li><a href="#" className="hover:bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faBookmark} /></a></li>
          </ul>
          <div className="hidden md:flex space-x-4">
            <button className="bg-white bg-opacity-40 rounded p-2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button className="bg-white bg-opacity-40 rounded p-2 mr-7"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <button onClick={handleNav} className="bg-white bg-opacity-40 rounded p-2">{toggleNav ? <></> : <FontAwesomeIcon icon={faBars} /> }</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar