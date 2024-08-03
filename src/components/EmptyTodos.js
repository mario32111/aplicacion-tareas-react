import React from 'react';
import styled from "styled-components";
import { GiEmptyMetalBucket } from "react-icons/gi";

const EmptyLabel = styled.div`
    width: 100%;
    height: 100%;

`;


const StyledEmptyIcon = styled(GiEmptyMetalBucket)`
  color: gray;
  margin: 0 auto;  

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

function EmptyTodos() {

    return (
      <EmptyLabel>
        <StyledEmptyIcon />
      </EmptyLabel>
    )
  }

export { EmptyTodos };