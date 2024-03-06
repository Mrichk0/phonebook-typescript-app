import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Container from "../../styles/container";

interface ISectionProps {
  children: React.ReactChild | ReactNode;
  title: string;
}

const TitleStyled = styled.h2`
  color: black;
  text-align: center;
`;

const Section: FC<ISectionProps> = ({ title, children }) => {
  return (
    <section>
      <Container>
        <TitleStyled>{title}</TitleStyled>
        {children}
      </Container>
    </section>
  );
};

export default Section;
