import { NavLink } from "react-router-dom";

import styled from "styled-components";

const AuthNavLink = styled(NavLink)`
  color: #333333;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #696969;
    box-shadow: none;
  }
`;

const AuthBar = () => {
  return (
    <div>
      <AuthNavLink to={"login"}>login</AuthNavLink>
      <AuthNavLink to={"register"}>register</AuthNavLink>
    </div>
  );
};

export default AuthBar;
