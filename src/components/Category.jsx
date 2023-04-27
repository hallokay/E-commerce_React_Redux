import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

import { category } from "../data/data";
import Slider from 'react-slick';
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <ControlBtn onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </ControlBtn>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <ControlBtn onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </ControlBtn>
  );
}

const Category = () => {

   let settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 7,
     slidesToScroll: 2,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,
     responsive: [
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 2,
         },
       },
     ],
   };
  return (
    <CategorySection>
      <div className="container">
        <Slider {...settings}>
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
const CategorySection = styled.section`
  margin-top: 50px;
  position: relative;
  .box {
    border-radius: 0;
    text-align: center;
    background: white;
    margin: 5px;
    cursor: pointer;
    padding: 10px 0;
  }
  img {
    margin: auto;
  }
  p {
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
  }
`;
const ControlBtn = styled.div`
  /* position: relative; */

  button {
    background: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    padding: 2px;
  }
  .prev {
    position: absolute;
    top: 30%;
    left: -20px;
    z-index: 99;
  }
  .next {
    position: absolute;
    top: 30%;
    right: -20px;
  }
  .icon {
    font-size: 25px;
  }
`;
export default Category