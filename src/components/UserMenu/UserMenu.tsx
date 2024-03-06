import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { logout } from "../../store/AuthReduсe/authOperation";

import styled from "styled-components";
import { selectUser } from "../../store/AuthReduсe/authSelectors";

const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  color: #333333;
  margin-right: 25px;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: #333333;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    text-decoration: underline;
  }
`;

const UserMenu = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(logout());
  };

  return (
    <UserMenuContainer>
      <UserName>Welcome, {user?.name}</UserName>
      <LogoutButton onClick={handleClick}>Logout</LogoutButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
