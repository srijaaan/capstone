import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart.context'
const ProductCard = ({product}) => {
  const {addItemToCart} = useContext(CartContex)
  const addProductToCart = () => addItemToCart(product)
  const{name, imageUrl, price} = product
  return (
    <ProductCartContainer>
        <img alt={`${name}`} src={imageUrl}/>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCartContainer>
  )
}

export default ProductCard