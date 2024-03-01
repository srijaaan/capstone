import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'

const CategoryPreview = ({title, products}) => {
  return (
    <div className="category-preview-container">
        <h2>
            <span className="title">{title.toUpperCase()}</span>
        </h2>
        <div className="preview">
            {
                products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                )).slice(0,4)
            }
        </div>
    </div>
  )
}

export default CategoryPreview