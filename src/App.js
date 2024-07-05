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

function useLocalStorage(itemName, initalValue){

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initalValue));   
    parsedItem = initalValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem]= React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('tareas', []);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos= todos.length;

  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan todos de ' +searchValue);

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
