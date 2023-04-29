import React from 'react'
import { ProductCart } from './index'
import { product } from "../data/data";
import styled from 'styled-components';
const Product = () => {
  return (
    <ProductSection>
      <div className="container grid3">
        {product.map((item) => (
          <ProductCart key={item.id} item={item} />
        ))}
      </div>
    </ProductSection>
  )
}
const ProductSection = styled.section`
  margin-top: 50px;
  .container {
    grid-gap: 1rem;
  }
`;
export default Product