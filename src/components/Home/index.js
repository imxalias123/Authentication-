// Write your JS code here
import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = () => (
  <div className="container">
    <Header />
    <div className="home-container">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
