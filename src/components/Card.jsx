import React, { useState } from "react";
import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CartItem } from './index'
import { useSelector } from "react-redux";


const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  //total
  let total = 0;
  cartItems.forEach(item => {
    total += item.totalPrice;
  })
  return (
    <>
      <CardWrap onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </CardWrap>
      {cardOpen && <Overlay />}
      {cardOpen && (
        <CartItemContainer>
          <div className="flex">
            <h2>Shopping Cart</h2>
            <button onClick={() => setCardOpen(!cardOpen)}>
              <AiOutlineClose className="icon" />
            </button>
          </div>

          <CartList>

            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

          </CartList>

          <CheckOut>
            <button>
              <span>priceed To Checkout</span>
              <label>${total}</label>
            </button>

          </CheckOut>
        </CartItemContainer>
      )}
    </>
  );
};

const CardWrap = styled.div`
  position: relative;
  cursor: pointer;

  .cardIcon {
    font-size: 25px;
  }
  span {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 18px;
    height: 18px;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    border-radius: 50%;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 90vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 77;
`;

const CartItemContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
  height: 100vh;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  z-index: 88;

  .icon {
    font-size: 25px;
  }
`;

const CartList = styled.ul`
    
`
const CheckOut = styled.div`

`

export default Card;
