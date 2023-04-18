import React from 'react'
import { Slider, Order, Product, Category } from "../components";
import styled from 'styled-components';

const Home = () => {
  return (
    <Main>
      <Slider />
      <Order />
      <Category />
      <Product />
    </Main>
  );
}
const Main = styled.main`
  margin-top: 80px;

`
export default Home