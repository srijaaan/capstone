import ShoppingIcon from '../../assets/shopping-bag.svg'
import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart.context'

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContex)
  const handleCart = () =>{
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartIconContainer onClick={handleCart}>
        <img src={ShoppingIcon} className='shopping-icon'/>
        <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer> 
  )
}

export default CartIcon