import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('tareas', []);
    const { item: categories, saveItem: saveCategories, categoriesLoading, categoriesError } = useLocalStorage('categories', []);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [openSideBar, setOpenSideBar] = React.useState(true);

    // Estados de los campos de la ventana a añadir
    const [date, setDate] = React.useState('');
    const [important, setImportant] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const [details, setDetails] = React.useState('');

    const [categoryNav, setCategoryNav] = React.useState('home');

    // Función para limpiar los campos
    const clearFields = () => {
        setDate('');
        setImportant(false);
        setCategory('');
        setDetails('');
    };

    const searchedTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const importantTodos = searchedTodos.filter(todo => todo.important);

    const toggleTodoStatus = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
    };

    const addTodo = (name, imp) => {
        const newTodos = [...todos];
        newTodos.push({text: name, completed: false, important: imp});
        saveTodos(newTodos);
    };

    const addCategorie = (name, details) => {
        const newCategories = [...categories];
        newCategories.push({text: name, description: details});
        saveCategories(newCategories);
    };

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
            openSideBar,
            setOpenSideBar,
            date,
            setDate,
            important,
            setImportant,
            category,
            setCategory,
            details,
            setDetails,
            clearFields, // Proporcionar la función clearFields
            addCategorie,
            categoryNav,
            setCategoryNav,
            importantTodos,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
