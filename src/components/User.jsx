import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBagCheck, AiOutlineHeart, GrHelp, BiLogOut,  IoSettingsOutline } from "../constants/index";
import styled from "styled-components";
const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <>
      {/* 유저정보가 있으면 프로필화면 아니면 로그인 */}
      {user ? ( //유저 정보가 있을때 프로필 열기
        <>
          <ProfileBtn onClick={() => setProfileOpen(true)}>
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
                <div>
                  <button>
                    <IoSettingsOutline/>
                  </button>
                </div>
            </OpenProfile>
          )}
        </>
      ) : (
        <>
          <span>login</span>
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
  padding: 5px 10px;
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

export default User;
