import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContex)
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map((cartItem)=>(
            <CartItem key={cartItem.id} cartItem={cartItem}/>
          ))}
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown