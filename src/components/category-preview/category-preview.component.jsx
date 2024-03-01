import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .map((product) => <ProductCard key={product.id} product={product} />)
          .slice(0, 4)}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
