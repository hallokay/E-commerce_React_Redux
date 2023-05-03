import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../fetures/cartSlice'

const ProductCart = ({ item: { id, cover, name, price } }) => {
  const dispatch = useDispatch()
  const addCart = () => {
    dispatch(addToCart({ id, name, cover, price }));
  }
  return (
    <>
      <BoxItems className="box boxItem" id="product">
        <div className="img">
          <Link>
            <img src={cover} alt={name} />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </BoxItems>
    </>
  );
}
const BoxItems = styled.div`
  transition: 0.5s;
  display: flex;
  background: #fff;
  padding: 20px;

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    cursor: pointer;
    transform: translateY(-5px);
  }
  img {
    width: 105px;
    height: 105px;
    object-fit: cover;
    margin-right: 20px;
  }
  .details {
    width: 100%;
  }
 .details h3 {
    font-size: 17px;
  }
 .details p {
    margin: 10px 0;
  }
  button {
    font-size: 25px;
    margin-top: 15px;
    float: right;
  }
`;
export default ProductCart