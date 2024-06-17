import styled from "styled-components";

const Lista = styled.ul`
  padding: 0px;
  padding-bottom: 12px;
  
`;

function TodoList(props) {
    return (
      <Lista>
        {props.children}
      </Lista>
    )
  }

export { TodoList };