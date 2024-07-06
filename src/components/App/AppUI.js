import React from 'react';
import SideBar from '../SideBar';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Categories } from '../Categories';
import { ContainerSearch } from '../ContainerSearch';
import { VentanaCrear } from '../VentanaCrear';
import { AgregarTarea } from '../AgregarTarea';
import { AgregarCategoria } from '../AgregarCategoria';

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleTodoStatus,
  deleteTodo
}) {
  return (
    <>
      {/* <SideBar /> */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <Categories>
        {/* <VentanaCrear ExtraContent={AgregarCategoria}></VentanaCrear> */}
        <ContainerSearch>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CreateTodoButton />
        </ContainerSearch>
        <TodoList>
          {searchedTodos.map((todo, index) => (
            <TodoItem
              key={todo.text}
              nombre={todo.text}
              completed={todo.completed}
              toggleStatus={() => toggleTodoStatus(index)}
              deleteTodo={() => deleteTodo(index)}
            />
          ))}
        </TodoList>
      </Categories>
    </>
  );
}

export { AppUI };
