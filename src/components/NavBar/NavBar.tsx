import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useAppSelector } from "../../hooks/storeHooks";

import AuthBar from "../AuthBar";
import UserMenu from "../UserMenu/UserMenu";

import Container from "../../styles/container";
import styled from "styled-components";
import { selectIsLogin } from "../../store/AuthReduсe/authSelectors";

const Header = styled.section`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  margin-bottom: 50px;
`;

const StyledLink = styled(NavLink)`
  color: #333333;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = () => {
  const isAuth = useAppSelector(selectIsLogin);

  return (
    <>
      <Header>
        <Container>
          <NavContainer>
            <StyledLink to={"/"}>Home</StyledLink>
            {isAuth ? <UserMenu /> : <AuthBar />}
          </NavContainer>
        </Container>
      </Header>

      <Suspense>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default NavBar;
