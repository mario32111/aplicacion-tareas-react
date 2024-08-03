import React from 'react';
import styled, { keyframes } from "styled-components";

const loadingSkeleton = keyframes`
  0%, 100% {
    opacity: 100%;
  }

  50% {
    opacity: 0%;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adds some spacing between the loading labels */
`;

const LoadingLabel = styled.div`
  width: 90%;
  border-radius: 12px;
  margin: 2px auto;
  height: 40px; 
  background-color: #ccc;
  animation: ${loadingSkeleton} infinite 1.5s;
  border-radius: 5px; /* Optional: Adds rounded corners */
`;

function TodosLoading() {
  return (
    <LoadingContainer>
      <LoadingLabel />
      <LoadingLabel />
      <LoadingLabel />
      <LoadingLabel />
      <LoadingLabel />
    </LoadingContainer>
  );
}

export { TodosLoading };