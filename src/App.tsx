import { ReactInstance, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props)=> props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [value , setValue] = useState("");
  // change 함수가 Input Element에 의해서 실행 될 것을 아는 것
  const onChange = ( event: React.FormEvent<HTMLInputElement> ) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    console.log("hello" , value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" 
          value = {value}
          onChange={onChange} 
          placeholder="username" 
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
