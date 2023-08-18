// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import Header from '../Header'

const Home = () => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
  }

  return (
    <>
      <Header />
      <div>
        <h1>Home Route</h1>
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </>
  )
}

export default Home
