import React from 'react'
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from 'styled-components';

const CartItem = ({item}) => {
  return (
    <Item>
      <ItemImg>
        <img src={item.cover} alt='img' />
        <button className='flexCenter'>
            <AiOutlineClose />
        </button>
      </ItemImg>
      <p>
      {item.name}
      </p>
      <label htmlFor="">Unit {item.price}</label>
    </Item>
  );
}
const Item = styled.li`
    
`
const ItemImg = styled.div`

`
export default CartItem