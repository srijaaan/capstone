import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';
import { useContext } from 'react'
import {CartContex} from '../../contexts/cart.context'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const { addItemToCart, removeItemfromCart, delteFromCart} = useContext(CartContex)
  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <Quantity>
            <Arrow onClick={()=>removeItemfromCart(cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={()=>addItemToCart(cartItem)}>&#10095;</Arrow>
        </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={()=>delteFromCart(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem 