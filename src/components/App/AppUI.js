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
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';


function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleTodoStatus,
  deleteTodo,
  windowActived,
  setWindowActived,  
}) {
  return (
    <>
      { <SideBar /> }
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <Categories>
        {windowActived && <VentanaCrear ExtraContent={AgregarTarea} openWindow={setWindowActived}></VentanaCrear>}
        <ContainerSearch>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CreateTodoButton openWindow={setWindowActived}/>
        </ContainerSearch>
        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

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
