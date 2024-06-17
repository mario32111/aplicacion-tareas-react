import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 50px;
  border: none;
  color: white;
  background-color: #01B7B6;
  width: 40px;
  height: 40px;
  font-size: 24px;
  transition: background-color 0.3s ease, transform 0.1s ease;


  &:hover{
    transform: scale(1.1);
  }

  &:active{
    background-color: #00796b;
  }


`


function CreateTodoButton() {
    return (
        <StyledButton>+</StyledButton>
    )
  }

export {CreateTodoButton}