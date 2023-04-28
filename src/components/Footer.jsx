import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <FooterContainer className='boxItems'>
        <div className='container flex'>
          <p>Cartsy Medicine - All right reserved - Design & Developed by RedQ ,Inc</p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </FooterContainer>
    </>
  )
}
const FooterContainer = styled.footer`
margin-top: 50px;
padding: 10px;
.container {
  max-width: 95%;
  margin: auto;
}
.icon {
  font-size: 20px;
  margin-left: 10px;
}
`

export default Footer