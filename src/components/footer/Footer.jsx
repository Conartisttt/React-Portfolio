import { Link } from 'react-router-dom';


import twitterlogo from './assets/twitter-logo.png'
import linkedinlogo from './assets/linkedin-logo.png'
import githublogo from './assets/github-logo.png'


import './footer.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {

  return (
    <div className="container text-center">
        <div className="row align-items-center">
            <div className="col">
                <Link
                to="https://github.com/Conartisttt"
                target="_blank"
                >
                    <img className='logo' src={githublogo} alt="github logo" />
                </Link>
            </div>
            <div className="col">
                <Link
                to="https://www.linkedin.com/in/conartist/"
                target="_blank"
                >
                    <img className='logo' src={linkedinlogo} alt='linkedin logo'></img>
                </Link>

            </div>
            <div className="col">
                <Link
                to="https://twitter.com/Conartisttt"
                target="_blank"
                >
                    <img className='logo' src={twitterlogo} alt='twitter logo'></img>
                </Link>

            </div>
        </div>

    </div>
  );
}

export default Footer;