import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../../hooks/useLocalStorage';


/* localStorage.setItem('tareas', JSON.stringify([{text: 'cortar cebolla', completed: true}]))
 */
function App() {
  const {item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        activateBuuttonAddTodo: addTodo,
      } = useLocalStorage('tareas', []);


  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan todos de ' + searchValue);

  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleTodoStatus = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading= {loading}
      error= {error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleTodoStatus={toggleTodoStatus}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
