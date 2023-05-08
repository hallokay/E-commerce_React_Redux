import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userMenu } from '../constants/index'
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { logOut} from '../fetures/authSlice.js'

const User = () => {
  const dispatch = useDispatch();

  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
 
  return (
    <>
      {/* 유저정보가 있으면 프로필화면 아니면 로그인 */}
      {user ? ( //유저 정보가 있을때 프로필 열기
        <>
          <ProfileBtn onClick={() => setProfileOpen(!profileOpen)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              alt="user-img"
            />
          </ProfileBtn>

          {profileOpen && (
            <OpenProfile onClick={() => setProfileOpen(!OpenProfile)}>
              <UserInfo>
                <Link to="/account">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                    alt="user"
                  />
                </Link>
                <h4>kay jeon</h4>
                <label htmlFor="">chuncheon, korea</label>
              </UserInfo>

              <SettingBtn>
                {userMenu.map((menu, i) => (
                  <Link to={menu?.to} key={i}>
                    <span className="icon">{menu.icon}</span>
                    <h4>{menu.name}</h4>
                  </Link>
                ))}

                <Link onClick={() => dispatch(logOut())}>
                  <span className="icon">
                    <BiLogOut />
                  </span>
                  <h4>log out</h4>
                </Link>
              </SettingBtn>
            </OpenProfile>
          )}
        </>
      ) : (
        <>
          <LoginBtn>Login</LoginBtn>
        </>
      )}
    </>
  );
};

const ProfileBtn = styled.button`
  margin-left: 25px;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const OpenProfile = styled.div`
  position: absolute;
  width: 250px;
  top: 80px;
  right: 10px;
  padding: 10px 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  background: #fff;
  color: #000;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;

  h4 {
    font-size: 15px;
    font-weight: 500;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const SettingBtn = styled.div`
  padding: 20px 0 10px;

   a{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  h4 {
    font-weight: normal;
    text-transform: capitalize;
  }
  .icon {
    margin-right: 10px;
    font-size: 18px;
  }
`;
const LoginBtn = styled.button`
  margin-left: 25px;
`;

export default User;
