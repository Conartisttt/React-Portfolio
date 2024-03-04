import { Link } from 'react-router-dom';

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
                Github
                </Link>
            </div>
            <div className="col">
                <Link
                to="https://www.linkedin.com/in/conartist/"
                target="_blank"
                >
                LinkedIn
                </Link>

            </div>
            <div className="col">
                <Link
                to="https://twitter.com/Conartisttt"
                target="_blank"
                >
                Twitter
                </Link>

            </div>
        </div>

    </div>
  );
}

export default Footer;