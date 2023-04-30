import styled from "styled-components";

export const Section = styled.section`
  /* position: relative; */
  margin-bottom: 50px;
  .backImg {
    position: relative;
    width: 100%;
    height: 50vh;
  }
  .backImg img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  .text {
    position: absolute;
    top: 40%;
    left: 50%;
    z-index: 1;
    text-align: center;
    color: #fff;
  }
  .text span {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 25px;
    text-transform: capitalize;
    color: #fff;
  }
  .text h1 {
    font-size: 40px;
  }
  a {
    margin-top: 20px;
    text-decoration: none;
  }
`; 