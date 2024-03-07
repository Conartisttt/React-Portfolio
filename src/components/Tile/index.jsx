import { Link } from 'react-router-dom';
import './Tile.css'

function Tile ({ repo, app, name, tile  }) {
    return (
        <div className={`${tile} hover m-2 d-flex flex-column align-items-start justify-content-between`}>
        <Link
          className='remove-styling'
          to={`${repo}`}
          target='_blank'
          >
          <h2 className='git-heading'>Github</h2>
          </Link>
          <Link
          className='remove-styling'
          to={`${app}`}
          target="_blank"
          >
          <h2 className='app-heading align-self-'>{name}</h2>
          </Link>
        </div>
    )
}


export default Tile