import React from 'react'
import back from "../../images/my-account.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Section } from './AuthCss'; 
const Login = () => {
  return (
    <>
      <Section>
        <div className="container">
          <div className="backImg">
            <img src={back} alt="backimg" />
            <div className="text">
              <span>login</span>
              <h1>My Account</h1>
            </div>
          </div>
            <form>
              <label htmlFor="email">Username or Email address</label>
              <input name="email" type="text" required />
              <label htmlFor="user">Username * </label>
              <input name="user" type="text" required />
              <label htmlFor="psw">Password *</label>
              <input name="psw" type="text" required />
              <button className="button">Login</button>
            <Link to="/register">Register</Link>
            </form>
        </div>
      </Section>
    </>
  );
};

export default Login