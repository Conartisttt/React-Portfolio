import downloadIcon from './assets/download-icon.webp'
import resume from './assets/resume.pdf'

import './resume.css'

export default function About() {
  return (
    <div>
      <h1>Proficiences</h1>
      <div className='d-flex justify-content-center'> 
      <ul className='list-group w-75 text-center'>
        <li className="list-group-item">HTML5</li>
        <li className="list-group-item">CSS3</li>
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">JQuery</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">Express.js</li>
        <li className="list-group-item">MySQL</li>
        <li className="list-group-item">MongoDB</li>
        <li className="list-group-item">Handlebars.js</li>
        <li className="list-group-item">React.js</li>
      </ul>
      </div>
      <h1>Resume</h1>
      <div className='d-flex justify-content-center'>
        <a
        className='a-tag'
        href={resume}
        >
        <img className='download-icon grow' src={downloadIcon} alt="download icon" />
        </a>
        </div>
    </div>
  );
}
