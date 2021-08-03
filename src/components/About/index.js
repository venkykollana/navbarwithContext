import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const blackGroundTheme = isDarkTheme ? 'dark' : 'light'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const textTheme = isDarkTheme ? 'dark-text' : 'light-text'

      return (
        <div className={blackGroundTheme}>
          <Navbar />
          <div className="about-container">
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className={`heading ${textTheme}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
