import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const closeCard = () => {
    setCardOpen(null);
  }
  return (
    <>
      <CardWrap>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{}1</span>
      </CardWrap>

      {!cardOpen && <CartItem>
        <h1>11111</h1>
        </CartItem>}
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

const CartItem = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
  height: 100vh;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  z-index: 88;
`;

export default Card;
