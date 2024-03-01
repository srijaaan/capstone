import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";
import './shop.styles.scss'

const Shop = () => {
  const {categoriesMap} = useContext(CategoriesContext);
  return (
    <>
      {
        Object.keys(categoriesMap).map((title)=>(
          < div key={title}>
            <h2>{title.toUpperCase()}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Shop;
