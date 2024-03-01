import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const {cartItems, setIsCartOpen} = useContext(CartContex)
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={()=>{navigate('/checkout');setIsCartOpen(false)}}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown