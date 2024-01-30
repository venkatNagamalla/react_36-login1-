// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogout = () => {
    // const jwtToken = Cookies.get('jwt_token')
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button onClick={onLogout} className="logout-btn" type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
