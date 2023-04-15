import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {slide} from '../data/data'
import styled from 'styled-components'

const Slider = () => {
  return (
    <div className="slider">
      <div className="grid">
        {slide.map((item, i) => (
          <div className="box" key={i}>
            <ImgWrap>
              <img src={item.image} alt="slideimg" />
            </ImgWrap>
          </div>
        ))}
      </div>
    </div>
  );
}
const ImgWrap = styled.div`
`
export default Slider