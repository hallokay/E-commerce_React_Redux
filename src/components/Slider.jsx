import React from 'react'
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import {slide} from '../data/data'
import styled from 'styled-components'

const Slider = () => {
  return (
    <Container className="slider">
      <div className="container grid">
        {slide.map((item, i) => (
          <div className="box" key={i}>
            <ImgWrap>
              <img src={item.image} alt="slideimg" />
            </ImgWrap>
          </div>
        ))}
      </div>
    </Container>
  );
}
const Container = styled.div`
/* margin-top: 65px; */
padding-top: 65px;
/* z-index: -1; */
`
const ImgWrap = styled.div`
  img {
    width: 100%;
  }
`;
export default Slider