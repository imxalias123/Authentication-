// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <>
    <ul className="header-container">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  </>
)
export default Header
