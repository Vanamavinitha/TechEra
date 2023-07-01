import {Link} from 'react-router-dom'

const NotFound = () => (
  <div>
    <Link to="/" className="link-el">
      <nav className="Nav">
        <img
          className="Logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </nav>
    </Link>
    <div className="NoContainer">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="NoHeading">Page Not Found</h1>
      <p className="NoParagraph">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
