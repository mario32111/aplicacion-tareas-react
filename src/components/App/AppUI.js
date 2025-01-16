import React from 'react';
import SideBar from '../SideBar';
import SideBarInactive from '../SideBarInactive';

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
      setOpenModal,
      openSideBar,
      setOpenSideBar,
      categoryNav,
      setCategoryNav,
      importantTodos
    } = React.useContext(TodoContext)

  return (
    <>
      {openSideBar && (
        <Modal containerId={'sidebar'}>
          {<SideBar openWindow={setOpenSideBar} />}
        </Modal>
      )}

      {!openSideBar && (
        <Modal containerId={'sidebar'}>
          {<SideBarInactive openWindow={setOpenSideBar} />}

        </Modal>
      )}
      <TodoCounter />
      {categoryNav === 'home' && (
        <Categories>
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}
          </TodoList>
        </Categories>
      )}

      {categoryNav === 'important' && (
        <Categories>
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && importantTodos.length === 0 && <EmptyTodos />}
          </TodoList>
        </Categories>
      )}

      {openModal && (
        <Modal containerId={'modal'}>
          <VentanaCrear ExtraContent={AgregarTarea} openWindow={setOpenModal}></VentanaCrear>
        </Modal>
      )}

    </>
  );
}

export { AppUI };
