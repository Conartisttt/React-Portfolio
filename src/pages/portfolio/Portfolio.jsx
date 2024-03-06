import { Link } from 'react-router-dom';

import './portfolio.css'

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>

      <div className="d-flex flex-wrap justify-content-center">
        
        <div className='tile1 hover m-2 d-flex flex-column align-items-start justify-content-between'>
          <Link
          className='remove-styling'
          to="https://github.com/Conartisttt/Off-Road-Unstucker"
          target="_blank"
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to="https://offthebeatenpath-c1b11d5328ea.herokuapp.com/"
          target="_blank"
          >
          <h2 className='app-heading align-self-'>Off The Beaten Path</h2>
          </Link>
        </div>

        <div className='tile2 hover m-2 d-flex flex-column align-items-start justify-content-between'>
        <Link
          className='remove-styling'
          to="https://github.com/Conartisttt/Brewery-Finder"
          target="_blank"
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to="https://elmiquea.github.io/Brewery-Finder/"
          target="_blank"
          >
          <h2 className='app-heading align-self-'>Brewery Finder</h2>
          </Link>
        </div>

        <div className='tile3 hover m-2 d-flex flex-column align-items-start justify-content-between'>
        <Link
          className='remove-styling'
          to="https://github.com/Conartisttt/Cosmic-Counsel"
          target="_blank"
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to="https://conartisttt.github.io/Cosmic-Counsel/"
          target="_blank"
          >
          <h2 className='app-heading align-self-'>Cosmic Counsel</h2>
          </Link>
        </div>

        <div className='tile4 hover m-2 d-flex flex-column align-items-start justify-content-between'>
        <Link
          className='remove-styling'
          to="https://github.com/Conartisttt/PWA-Text-Editor"
          target="_blank"
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to="https://pwa-text-editor-0wj9.onrender.com/"
          target="_blank"
          >
          <h2 className='app-heading align-self-'>PWA Text Editor</h2>
          </Link>
        </div>

        <div className='tile5 hover m-2 d-flex flex-column align-items-start justify-content-between'>
        <Link
          className='remove-styling'
          to="https://github.com/Conartisttt/MVC-Tech-Blog"
          target="_blank"
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to="https://afternoon-basin-69831-98d2be827880.herokuapp.com/"
          target="_blank"
          >
          <h2 className='app-heading align-self-'>Tech Blog</h2>
          </Link>
        </div>

        <div className='tile6 hover m-2 d-flex flex-column align-items-start justify-content-between'>
        <Link
          className='remove-styling'
          to="https://github.com/Conartisttt/OpenWeatherAPI-Dashboard"
          target="_blank"
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to="https://conartisttt.github.io/OpenWeatherAPI-Dashboard/"
          target="_blank"
          >
          <h2 className='app-heading align-self-'>Weather Dashboard</h2>
          </Link>
        </div>

        <div className='tile7 hover m-2 d-flex flex-column align-items-start justify-content-between'>
        <Link
          className='remove-styling'
          to="https://github.com/Conartisttt/3rdPrtyAPIs-Work-Day-Scheduler"
          target="_blank"
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to="https://conartisttt.github.io/3rdPrtyAPIs-Work-Day-Scheduler/"
          target="_blank"
          >
          <h2 className='app-heading align-self-'>Work Day Scheduler</h2>
          </Link>
        </div>

      </div>
    </div>
  );
}
