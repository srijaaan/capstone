import './product-card.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart.context'
const ProductCard = ({product}) => {
  const {addItemToCart} = useContext(CartContex)
  const addProductToCart = () => addItemToCart(product)
  const{name, imageUrl, price} = product
  return (
    <div className='product-card-container'>
        <img alt={`${name}`} src={imageUrl}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}

export default ProductCard