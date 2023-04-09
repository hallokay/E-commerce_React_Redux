import {useState, useEffect} from 'react'
import styled from 'styled-components';
// import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
 
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [showHeader]);
  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if(currentScrollPosition > 100) {
      setShowHeader(false);
    } else {
      setShowHeader(true);

    }
  }
  return (
    <HeaderContainer style={{ display: showHeader ? "block" : "none" }}>
      <Wrap>
        <Logo>
          <Link to="/">
            <img src="logo" alt="logo" />
          </Link>
        </Logo>
        <Search>
          <AiOutlineSearch className="searchIcon" />
          <input type="text" placeholder="Search..." />
        </Search>
        <Account></Account>
      </Wrap>
    </HeaderContainer>
  ); 
}

const HeaderContainer = styled.header`
position: fixed;
top: 0;
background: #343434;
width: 100%;
height: 65px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

`;
const Logo = styled.div``
const Search = styled.div``
const Account = styled.div``
export default Header