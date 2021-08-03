import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const blackGroundTheme = isDarkTheme ? 'dark' : 'light'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const textTheme = isDarkTheme ? 'dark-text' : 'light-text'

      return (
        <div className={blackGroundTheme}>
          <Navbar />
          <div className="home-container">
            <img src={homeImage} alt="home" className="home-image" />
            <h1 className={`heading ${textTheme}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
