import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

import { category } from "../data/data";
import Slider from 'react-slick';

const Category = () => {
  return (
    <CategorySection>
      <div className="container">
        <Slider>
          {category.map((item) => (
            <div className="boxs" key={item.id}>
              <div className="box boxItem">
                <img src={item.cover} alt="" />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </CategorySection>
  )
}
const CategorySection = styled.div`
  

`
export default Category