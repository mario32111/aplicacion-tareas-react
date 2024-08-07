import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
/*       loading= {loading}
      error= {error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleTodoStatus={toggleTodoStatus}
      deleteTodo={deleteTodo}
      windowActived = {activedAddTodoWindow}
      setWindowActived = {setActivedTodoWindow} */
  );
}

export default App;
