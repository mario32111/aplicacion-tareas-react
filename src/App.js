import  { TodoCounter } from './TodoCounter';
import  { TodoSearch } from './TodoSearch';
import  { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Categories } from './Categories';
import { ContainerSearch } from './ContainerSearch'

import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Las practicas de Ponce', completed: false},
  {text: 'Chambear', completed: true},
  {text: 'Jugar Valorant', completed: false},
  {text: 'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <>
       <TodoCounter completed={16} total={25} />
       <Categories>
        <ContainerSearch>
          <TodoSearch />
          {<CreateTodoButton />}
        </ContainerSearch>

        <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem key={todo.text} nombre={todo.text} completed={todo.completed}/>
            ))}
        </TodoList> 
       </Categories>


    </>
  );
}

export default App;
/* export default TodoItem; */