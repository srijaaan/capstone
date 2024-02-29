import './checkout.styles.scss'
import { useContext } from 'react'
import {CartContex} from '../../contexts/cart.context'
import CheckoutItem from '../checkout-item/checkout-item.component'

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContex)
  return (
    <div className='checkout-container'>
    <div className="checkout-header">
      <div className="header-block">Product</div>
      <div className="header-block">Description</div>
      <div className="header-block">Quantity</div>
      <div className="header-block">Price</div>
      <div className="header-block">Remove</div>
    </div>

      {
        cartItems.map((cartItem)=>{
          return(
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          )
        })
      }
      <span className="total">Total : ${cartTotal}</span>
    </div>
  )
}

export default Checkout