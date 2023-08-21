// Write your JS code here
import Cookies from 'js-cookie'
import Header from '../Header'

const About = () => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
  }

  return (
    <div className="container">
      <Header />
      <div className="about-container">
        <h1>About Route</h1>
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default About
