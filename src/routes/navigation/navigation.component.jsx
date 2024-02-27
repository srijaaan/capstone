import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import CrwnLogo from '../../assets/crown.svg'
const Navigation = () => {
  return (
   <>
    <div className="navigation">
    <Link to='/' className="logo-container">
        <img src={CrwnLogo} className="logo"/>
    </Link>
        <div className="nav-links-container">
           <Link className="nav-link" to='/shop'>SHOP</Link>
           <Link className="nav-link" to='/contact'>CONATCT</Link>
           <Link className="nav-link" to='/singin'>SIGN IN</Link>
        </div>
    </div>
    <Outlet/>
   </>
  )
}

export default Navigation