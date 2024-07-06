import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX, faExclamation} from '@fortawesome/free-solid-svg-icons';

const Item = styled.li`
  box-shadow: 3px 3px 1px  #c1c1c1;
  border-radius: 12px;
  margin: 12px auto;
  display: flex;
  align-items: center; /* Alinea los elementos verticalmente en el centro */
  list-style: none;
  width: 90%;
  padding: 10px; /* Añadir padding para más espacio alrededor del contenido */
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  p {
    flex-grow: 1; /* Hace que el párrafo tome todo el espacio disponible */
    margin: 0 10px; /* Añadir espacio horizontal */
  }

  del{
      flex-grow: 1; /* Hace que el párrafo tome todo el espacio disponible */
      margin: 0 10px; /* Añadir espacio horizontal */
  }

`;


const StyledIcon = styled(FontAwesomeIcon)`
  color: gray;
  font-size: 24px;
  margin: 0 5px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3 ease;
  outline: none; /* Opcional: elimina el borde de enfoque predeterminado del navegador */


  &:hover {
    transform: scale(1.1);
  }

  &:active {
    color: #00796b;


  }
`;

const StyledIconActive = styled(FontAwesomeIcon)`
  color: #00796b;
  font-size: 24px;
  margin: 0 5px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3 ease;
  outline: none; /* Opcional: elimina el borde de enfoque predeterminado del navegador */


  &:hover {
    transform: scale(1.1);
  }

  &:active {
    color: #00796b;

  }
`;



function TodoItem({ nombre, completed, toggleStatus, deleteTodo }) {
  return (
    <Item>
      {completed ? <StyledIconActive icon={faCheck} tabIndex="1" onClick={toggleStatus}/> :<StyledIcon icon={faCheck} tabIndex="1" onClick={toggleStatus}/>}
      {completed ? <del>{nombre}</del> : <p>{nombre}</p>}
      {completed ? <StyledIconActive icon={faExclamation} tabIndex="1" /> :<StyledIcon icon={faExclamation} tabIndex="1" />}
      {completed ? <StyledIconActive icon={faX} tabIndex="1" onClick={deleteTodo} /> :<StyledIcon icon={faX} tabIndex="1" onClick={deleteTodo} />}

      
       {/* Maneja el clic en el ícono de eliminar */}
    </Item>
  );
}

export { TodoItem };
