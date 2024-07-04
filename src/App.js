import React from 'react';
import SideBar from './SideBar';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Categories } from './Categories';
import { ContainerSearch } from './ContainerSearch'
import { VentanaCrear } from './VentanaCrear'
import { AgregarTarea } from './AgregarTarea';
import { AgregarCategoria } from './AgregarCategoria';
/* 
const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Las practicas de Ponce', completed: false},
  {text: 'Chambear', completed: true},
  {text: 'Jugar Valorant', completed: false},
  {text: 'Llorar con la llorona', completed: false},
]; 

localStorage.setItem('tareas', JSON.stringify(defaultTodos)); */

function App() {
  const localStorageTodos = localStorage.getItem('tareas')
  let parsedTodos;
  if (!localStorageTodos){
    localStorage.setItem('tareas', JSON.stringify([]));   
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos= todos.length;

  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan todos de ' +searchValue);

  const searchedTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('tareas', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const toggleTodoStatus = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos)
    saveTodos(newTodos);
  };
  
  

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
          {<CreateTodoButton />}
        </ContainerSearch>

        <TodoList>
          {searchedTodos.map((todo, index) => (
            <TodoItem 
              key={todo.text} 
              nombre={todo.text} 
              completed={todo.completed} 
              toggleStatus={() => toggleTodoStatus(index)} 
              deleteTodo= {() => deleteTodo(index)}
            />
          ))}
        </TodoList>
      </Categories>
    </>
  );
}

export default App;
