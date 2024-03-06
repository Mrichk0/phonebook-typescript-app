import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

export function HomePage() {
  return (
    <Container>
      <Title>welcome to my app</Title>
    </Container>
  );
}

export default HomePage;
