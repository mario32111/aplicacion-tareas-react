import React from 'react';
import styled from "styled-components";
import { MdError } from "react-icons/md";

const ErrorLabel = styled.div`
    display: flex;
    align-items: center;

`;


const StyledErrorIcon = styled(MdError)`
  color: gray;
  font-size: 24px;
  margin: 0 5px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    color: #ff0000;
  }
`;

function TodosError() {


    return (
      <ErrorLabel>
        <StyledErrorIcon />
      </ErrorLabel>
    )
  }

export { TodosError };