import { Outlet} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContex } from "../../contexts/cart.context";
import CrwnLogo from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContex);
  const handlelogOut = () => {
    signOutUser();
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={CrwnLogo} />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={handlelogOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />

    </>
  );
};

export default Navigation;
