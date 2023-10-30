import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHouse, faMagnifyingGlass, faTv, faBars, faXmark, faBookmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  
  const handleNav = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <header  className="bg-opacity-80 backdrop-blur-lg bg-accent font-semibold z-10 sticky top-0">
      <nav className="p-4">
        <div className="container transition-all duration-300 mx-auto flex items-center justify-between">
          <Link to="/homepage" className="text-3xl font-bold text-white" >Ani<span className="text-cool">Net</span></Link>
          <ul className={`${toggleNav ? "flex flex-col absolute -top-5 right-0 rounded-br-lg rounded-bl-lg justify-around items-center h-[32rem] bg-opacity-80 backdrop-blur-lg bg-accent font-semibold md:hidden transition-all duration-300 w-20 z-10" : "overflow-hidden h-0 p-0 m-0 z-10"} md:h-14 md:flex md:transition-all md:duration-300 space-x-4 md:items-center md:justify-center md:flex-grow`} style={{ zIndex: 1090 }}>
            <li><button aria-label="toggle navbar" className={`${toggleNav ? "" : "hidden"} hover:bg-cool px-4 py-2 rounded`} onClick={handleNav}><FontAwesomeIcon icon={faXmark} /></button></li>
            <li><Link  to="/homepage" aria-label="Home" className="hover-bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faHouse} /></Link></li>
            <li><Link to="/movies" aria-label="Movies" className="hover-bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faTv} /></Link></li>
            <li><Link  to="/series" aria-label="Series" className="hover-bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faFilm} /></Link></li>
            <li><Link to="/bookmark" aria-label="Bookmark" className="hover-bg-cool bg-opacity-40 p-4 mr-3 rounded"><FontAwesomeIcon icon={faBookmark} /></Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button aria-label="search" className="bg-white bg-opacity-40 rounded p-2 mr-7 md:mr-0"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <button onClick={handleNav} className="md:hidden bg-white bg-opacity-40 rounded p-2">{toggleNav ? <></> : <FontAwesomeIcon icon={faBars} />}</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
