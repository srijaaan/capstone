import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContex } from "../../contexts/cart.context";
import "./navigation.styles.scss";
import CrwnLogo from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContex);
  const handlelogOut = () => {
    signOutUser();
  };
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={CrwnLogo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONATCT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handlelogOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon className='navlink'/>
        </div>
        {
          isCartOpen&&
          <CartDropdown/>
        }
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
