import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../components/TodoContext';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { ContainerSearch } from './ContainerSearch';




const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    background-color: #fcfafa;
    border-radius: 12px;    
    box-shadow: 3px 3px 10px  rgba(128, 128, 128, 0.397);
`;

const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0;
`;

const ListaItems= styled.ul`
    padding:0;
`
const Item = styled.li`
    list-style: none;
    width: 100%;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    border-bottom: 4px solid transparent;
    border-top-left-radius: ${props => props.$first ? '12px' : '0'};
    border-top-right-radius: ${props => props.$last ? '12px' : '0'};
    transition: border-bottom-color 0.5s ease, background-color 0.5s ease; 
    
    &:hover {
        background-color: #c5c5c5;
    }

    ${props => props.$active && `
        border-bottom-color: #01B7B6;
        background-color: #c5c5c5;
    `}
`;

function Categories(props) {
    const [activeItem, setActiveItem] = useState('Todos');
    const { searchedTodos, toggleTodoStatus, deleteTodo, setOpenModal} = React.useContext(TodoContext);

    const handleClick = (item) => {
        setActiveItem(item);
    };

    const filteredTodos = searchedTodos.filter(todo => {
        if (activeItem === 'Pendientes') return !todo.completed;
        if (activeItem === 'Completadas') return todo.completed;
        return true; // Mostrar todos si la categoría es 'Todos'
    });

    return (
        <Container>
            <Lista>
                <Item $first $active={activeItem === 'Todos'} onClick={() => handleClick('Todos')}>Todos</Item>
                <Item $active={activeItem === 'Pendientes'} onClick={() => handleClick('Pendientes')}>Pendientes</Item>
                <Item $last $active={activeItem === 'Completadas'} onClick={() => handleClick('Completadas')}>Completadas</Item>
            </Lista>
            <ContainerSearch>
                <TodoSearch />
                <CreateTodoButton openWindow={setOpenModal} />
            </ContainerSearch>
            <ListaItems>
                {filteredTodos.map((todo, index) => (
                    <TodoItem
                        key={todo.text}
                        nombre={todo.text}
                        completed={todo.completed}
                        toggleStatus={() => toggleTodoStatus(index)}
                        deleteTodo={() => deleteTodo(index)}
                    />
                ))}
            </ListaItems>
                {props.children}
        </Container>


    );
}

export { Categories };
