import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('tareas', []);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);



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

    const addTodo = (name) => {
        const newTodos = [...todos];
        newTodos.push({text: name, completed: false})
        console.log("asdf");
        saveTodos(newTodos);
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleTodoStatus,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }