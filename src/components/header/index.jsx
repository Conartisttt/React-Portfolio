import { Link, useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';
import MatrixBackground from '../MatrixBackground'

import logo from './assets/me.png'

import './header.css'

function Header() {
  const [showMatrixBackground, setShowMatrixBackground] = useState(false);
  
  const currentPage = useLocation().pathname;

  const handleToggle = () => {
    setShowMatrixBackground(!showMatrixBackground);
  }

  useEffect(() => {
    document.querySelectorAll('input[type=checkbox][data-toggle="toggle"]').forEach(function (ele) {
      ele.bootstrapToggle();
    });
  }, [showMatrixBackground]);

  return (
    
    <div id="header">
      {showMatrixBackground && <MatrixBackground />}
      <div className='d-flex flex-column align-items-center'>
      <img className='image' src={logo}></img>
      <h1 className='name'>Conartisttt</h1>
      <div onClick={handleToggle}>
      <input
      type="checkbox" 
      data-toggle="toggle"
      data-onlabel="Red Pill"
      data-offlabel="Blue Pill"
      data-onstyle = "danger"
      data-offstyle = "info"
      />
      </div>
      
      </div>
    <ul className="nav nav-tabs justify-content-center">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>

    </ul>
    </div>
  );
}

export default Header;