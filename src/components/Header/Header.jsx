import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {

  const [activeLink, setActiveLink] = useState(null)

  const handleActiveLink = (link) =>{
    setActiveLink(link)
  }

  return (
      <nav className='navBar'>
        <ul className='link'>
          <li>
            <Link to="/" 
            className={`link-li ${window.location.pathname === "/"?"active-link":""}`}
            onClick={() => handleActiveLink("keyHighlits")}
            >
              Key Highlights</Link>
          </li>
          <li>
            <Link to="/webgis"
            className={`link-li ${window.location.pathname === "/webgis"?"active-link":""}`}
            onClick={() => handleActiveLink("webgis")}
            >Web GIS and Data Visualization</Link>
          </li>
          <li>
            <Link to="/training" className="link-li">Training & Capacity Building</Link>
          </li>
          <li>
            <Link to="/survey" className="link-li">Surveying and GIS Mapping</Link>
          </li>
          <li>
            <Link to="/disaster" className="link-li">Disaster Risk Resilience</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Header