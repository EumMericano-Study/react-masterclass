import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box>
        <span>hi</span>
      </Box>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;

  span {
    color: white;
  }
`;
