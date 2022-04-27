import styled from "styled-components";

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="brown" />

      <Button>log in</Button>
      {/* 버튼을 a링크처럼 사용하려할 때  */}
      <Button as="a">log in</Button>
    </Father>
  );
}

export default App;

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
`;

const Circle = styled(Box)`
  border-radius: 100px;
`;

const Button = styled.button`
  background-color: tomato;
  color: white;
  border: 0;
  border-radius: 50%;
`;
