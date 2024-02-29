import ShoppingIcon from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart.context'

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContex)
  const handleCart = () =>{
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className='cart-icon-container' onClick={handleCart}>
        <img src={ShoppingIcon} className='shopping-icon'/>
        <span className="item-count">{cartItemCount}</span>
    </div> 
  )
}

export default CartIcon