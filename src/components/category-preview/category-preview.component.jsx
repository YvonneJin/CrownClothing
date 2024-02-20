import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContianer,
  Title,
  Preview
} from './category-preview.styles';

import { Link } from 'react-router-dom';


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContianer>
      <h2>
        <Title>
          <Link className='shop-link' to={title}>
            {title.toUpperCase()}
          </Link>        
        </Title>
      </h2>
      <Preview>
        { 
          products
            .filter((_, idx) => idx < 4)
            .map((product) => <ProductCard key={product.id} product={product}/>) 
        }
      </Preview>
    </CategoryPreviewContianer>
  )
}

export default CategoryPreview;