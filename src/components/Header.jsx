import { useState, useEffect } from "react";
import styled from "styled-components";
import Medicine from "../images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Card, User } from "./index.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const isLogin = useSelector((state) => state.auth.isLogin);
const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   useEffect(() => {
    if(!isLogin) navigate('/login')
    else navigate('/')
   }, [isLogin]);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > 1300) {
      // setShowHeader(false);
      setShowHeader(true);
    } else {
      setShowHeader(true);
    }
  };

  return (
    <>
      {/* {showHeader && ( */}
      <HeaderContainer style={{ display: showHeader ? "block" : "none" }}>
        <Wrap className="flex">
          <Logo>
            <Link to="/">
              <img src={Medicine} alt="logo" />
            </Link>
          </Logo>
          {isLogin && (
            <>
              <Search className="flex">
                <AiOutlineSearch className="searchIcon" />
                <input type="text" placeholder="Search..." />
              </Search>
              <Account className="flexCenter">
                <Card />
                <User />
              </Account>
            </>
          )}
        </Wrap>
      </HeaderContainer>
      {/* )} */}
    </>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  /* height: 65px; */
  background: #fff;
  z-index: 100;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div``;

const Search = styled.div`
  /* border: 2px solid #212121; */
  border-radius: 6px;
  font-size: 15px;
  padding: 0 20px;
  width: 600px;

  .searchIcon {
    font-size: 22px;
    margin-right: 15px;
  }

  input {
    padding: 15px;
    width: 100%;
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Account = styled.div``;
export default Header;
