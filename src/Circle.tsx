import styled from "styled-components";

// interface는 오브젝트를 설명시켜준다.
interface ContainerProps{
  bgColor: string;
  borderColor: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${props => props.borderColor};
`;

interface CircleProps{
  bgColor: string;
  borderColor: string;
  text?: string;
}

function Circle({bgColor, borderColor,text="defualt"} : CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? "yellow"}>
    {text}
  </Container>;
}

export default Circle;
