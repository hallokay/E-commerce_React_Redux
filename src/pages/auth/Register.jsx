import React from 'react'
import back from "../../images/my-account.jpg";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Section } from "./AuthCss"; 

const Register = () => {
  return (
    <>
      <Section>
        <div className="container">
          <div className="backImg">
            <img src={back} alt="backimg" />
            <div className="text">
              <span>Register</span>
              <h1>My Account</h1>
            </div>
          </div>
            <form>
              <label htmlFor="email">Email address</label>
              <input name="email" type="text" required />
              <label htmlFor="user">Username * </label>
              <input name="user" type="text" required />
              <label htmlFor="psw">Password *</label>
              <input name="psw" type="text" required />
              <label htmlFor="psw-re">Confirm Password *</label>
              <input name="psw-re" type="text" required />
              <button className="button">Register</button>
              <Link to="/login">Login</Link>
            </form>
        </div>
      </Section>
    </>
  );
}
const RegisterSection = styled.section`
`

export default Register