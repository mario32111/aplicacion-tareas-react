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
import { TodoContext } from '../TodoContext';

function AppUI() {
  const 
  {
    loading,
    error,
    searchedTodos,
    toggleTodoStatus,
    deleteTodo,
    activedAddTodoWindow, 
    setActivedTodoWindow,
  } =React.useContext(TodoContext)
  return (
    <>
      {<SideBar />}
      <TodoCounter />
          <Categories>
            {activedAddTodoWindow && <VentanaCrear ExtraContent={AgregarTarea} openWindow={setActivedTodoWindow}></VentanaCrear>}
            <ContainerSearch>
              <TodoSearch />
              <CreateTodoButton openWindow={setActivedTodoWindow} />
            </ContainerSearch>
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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
