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
import { Modal } from '../Modal';


function AppUI() {
  const
    {
      loading,
      error,
      searchedTodos,
      toggleTodoStatus,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)
  return (
    <>
      {<SideBar />}
      <TodoCounter />
      <Categories>
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        </TodoList>
      </Categories>

      {openModal && (
        <Modal>
          <VentanaCrear ExtraContent={AgregarTarea} openWindow={setOpenModal}></VentanaCrear>
        </Modal>
      )}

    </>
  );
}

export { AppUI };
