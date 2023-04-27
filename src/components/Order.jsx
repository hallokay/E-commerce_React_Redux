import React from 'react'
import styled from 'styled-components'
import { order } from "../data/data";

const Order = () => {
  return (
    <OrderSection>
      <div className="container grid boxItems">
        {order.map((item) => (
          <div className="flexCenter box" key={item.id}>
            <div className="num">
              <h1>{item.id}</h1>
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderSection>
  );
}
const OrderSection = styled.section`
  margin-top: 50px;
  .container {
    padding: 50px 30px;
    background: #fff;
  }
  .num h1 {
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 50%;
    background: #feeec8;
    text-align: center;
    margin-right: 20px;
  }
  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 17px;
    line-height: 25px;
  }
 .box:nth-child(2) h1 {
    background: #ceeffe;
  }
  .box:nth-child(3) h1 {
    background: #d4f8c4;
  }
  .box:nth-child(4) h1 {
    background: #d8dafe;
  }
`;
export default Order