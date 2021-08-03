// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const blackGroundTheme = isDarkTheme ? 'dark' : 'light'
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const linkItemClassName = isDarkTheme
        ? 'darkThemeClassName'
        : 'lightThemeClassName'
      const buttonImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onClickTheme = () => {
        toggleTheme()
      }

      return (
        <div className={`navbar-container ${blackGroundTheme}`}>
          <img src={websiteLogo} className="website-logo" alt="website logo" />
          <ul className="navbar-items">
            <Link to="/" className="link-item">
              <li className={linkItemClassName}>Home</li>
            </Link>
            <Link to="/about" className="link-item">
              <li className={linkItemClassName}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-button"
            testid="theme"
            onClick={onClickTheme}
          >
            <img src={buttonImage} alt="theme" className="website-logo" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
