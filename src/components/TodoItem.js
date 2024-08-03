import React from "react";
import styled from "styled-components";
import { FaRegCheckCircle, FaRegTimesCircle, FaExclamation } from "react-icons/fa";

const Item = styled.li`
  box-shadow: 3px 3px 1px  #c1c1c1;
  border-radius: 12px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  list-style: none;
  width: 90%;
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  p, del {
    flex-grow: 1;
    margin: 0 10px;
  }
`;

const StyledIcon = styled(FaRegCheckCircle)`
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
    color: #00796b;
  }
`;

const StyledIconActive = styled(FaRegCheckCircle)`
  color: #00796b;
  font-size: 24px;
  margin: 0 5px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    color: #00796b;
  }
`;

const StyledExclamationIcon = styled(FaExclamation)`
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
    color: #ffcc00;
  }
`;

const StyledTimesIcon = styled(FaRegTimesCircle)`
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

function TodoItem({ nombre, completed, toggleStatus, deleteTodo }) {
  return (
    <Item>
      {completed ? (
        <StyledIconActive tabIndex="1" onClick={toggleStatus} />
      ) : (
        <StyledIcon tabIndex="1" onClick={toggleStatus} />
      )}
      {completed ? <del>{nombre}</del> : <p>{nombre}</p>}
      <StyledExclamationIcon tabIndex="1" />
      {completed ? (
        <StyledTimesIcon tabIndex="1" onClick={deleteTodo} />
      ) : (
        <StyledTimesIcon tabIndex="1" onClick={deleteTodo} />
      )}
    </Item>
  );
}

export { TodoItem };
