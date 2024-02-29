import './checkout-item.styles.scss'
import { useContext } from 'react'
import {CartContex} from '../../contexts/cart.context'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const { addItemToCart, removeItemfromCart, delteFromCart} = useContext(CartContex)
  return (
    <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'>{name}</span>
        <div className="quantity">
            <span className="arrow" onClick={()=>removeItemfromCart(cartItem)}>&#10094;</span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={()=>addItemToCart(cartItem)}>&#10095;</span>
        </div>
        <span className='price'>{price}</span>
        <div className="remove-button" onClick={()=>delteFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem 