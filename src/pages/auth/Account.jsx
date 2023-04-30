import React from "react";
import styled from "styled-components";
import image from "../../images/input.png";

const Account = () => {
  return (
    <>
      <AccountInfo>
        <div className="container boxItems">
          <h1>Account Infomation</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" name="" id="" />
                <img src={image} alt="" className="img-pre" />
              </div>
            </div>
            <div className="right">
              <label>Username</label>
              <input type="text" required />
              <label>Email</label>
              <input type="text" required />
              <label>Password * </label>
              <input type="text" required />
              <button className="button">Update</button>
            </div>
          </div>
        </div>
      </AccountInfo>
    </>
  );
};
const AccountInfo = styled.section`
  margin-top: 50px;
  .container {
    padding: 50px;
    max-width: 60%;
    margin: auto;
  }
  .content {
    margin-top: 80px;
    display: flex;
    justify-content: flex-start;
  }
  .left {
    width: 150px;
    position: relative;

    input {
      width: 150px;
      height: 150px;
      position: relative;
      z-index: 2;
      opacity: 0;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 150px;
      height: 150px;
      z-index: 1;
      border-radius: 50%;
    }
  }
  .right {
    width: calc(100% - 180px);
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  }
`;
export default Account;
