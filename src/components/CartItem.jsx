import React from 'react'
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../fetures/cartSlice'

const CartItem = ({ item: { id, cover, name, price, quantity, totalPrice } }) => {
  const dispatch = useDispatch();

  const inCartItems = () => {
    dispatch(addToCart({ id, name, price }));

  }

  const decsCartItems = () => {
    dispatch(removeFromCart({ id }))
  }


  return (
    <Item>

      <div className="cartContent">
        <ItemImg>
          <img src={cover} alt='img' />
          <button className='flexCenter'>
            <AiOutlineClose />
          </button>
        </ItemImg>

        <div className="details">
          <p>{name}</p>
          <label>Unit {price}</label>

          <div className="price">
            <div className="qty flexCenter">
              <button className='plus' onClick={inCartItems}>
                <AiOutlinePlus />
              </button>
              <button>{quantity}</button>
              <button className='minus' onClick={decsCartItems}>
                <AiOutlineMinus />
              </button>
            </div>
            <p className="priceTitle">
              ${totalPrice}
            </p>
          </div>
        </div>
      </div>

    </Item>
  );
}
const Item = styled.li`
margin: 40px 0;
display: flex;
`
const ItemImg = styled.div`
width: 105px;
height: 105px;
border-radius: 5px;
position: relative;
margin-right: 20px;

&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 105px;
  height: 105px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  opacity: 0;
  transition: 0.5s;
}

img {
  width: 100%;
  height: 100%;
}
`
export default CartItem