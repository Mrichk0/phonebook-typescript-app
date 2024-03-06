import React, { FC } from "react";
import styled from "styled-components";

interface IContainer {
  children: React.ReactChild | React.ReactNode;
}

const ContainerStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  // @media ${(state) => state.theme.media.small} {
  //   width: 540px;
  // }
  // @media ${(state) => state.theme.media.medium} {
  //   width: 720px;
  // }
  // @media ${(state) => state.theme.media.large} {
  //   width: 1180px;
  // }
`;

const Container: FC<IContainer> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
