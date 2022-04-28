import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Title>타이틀</Title>
      <Box>
        <span>hi</span>
      </Box>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;

  span {
    color: white;
  }
`;
