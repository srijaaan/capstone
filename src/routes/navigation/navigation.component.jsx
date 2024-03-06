import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import CrwnLogo from "../../assets/crown.svg";
import { signOutStart } from '../../store/user/user.action'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { useDispatch, useSelector } from "react-redux";
const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

  const handlelogOut = () => {
    signOutUser();
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrwnLogo} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={handlelogOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
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
