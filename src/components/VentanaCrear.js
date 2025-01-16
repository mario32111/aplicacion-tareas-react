import React from 'react';
import styled from 'styled-components';
import { TodoContext } from './TodoContext';
import { AgregarCategoria } from './AgregarCategoria';

const Ventana = styled.form`
    width: 40vw;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    background-color: #fcfafa;
    position: fixed;
    top: 3vw;
    left: 29vw;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 12px;
    padding-top: 0px;
    box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.397);
    z-index: 2; 
    height: 85vh;
`;

const Titulo = styled.h1``;

const ContVentana = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 0;
`;

const LabelDato = styled.p``;

const InputText = styled.input`
    border-radius: 12px;
    height: 24px;
    border: 1px solid #a7a7a7;
    outline: none;
    padding-left: 12px;
`;

const AddButton = styled.button`
    width: 10%;
    min-width: 80px;
    margin: 0 12px 0 auto;
    background-color: white;
    border: 1px solid #01B7B6;
    padding: 6px;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
        background-color: #01B7B6;
    }

    &:active {
        background-color: gray;
    }
`;

const ContCabecera = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px;
`;

const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    margin: auto 0;
    border-radius: 50px;
    background-color: #fcfafa;
    border: 1px solid #01B7B6;
    color: #01B7B6;
    cursor: pointer;
`;

function VentanaCrear({ ExtraContent, openWindow }) {
    const { addTodo, clearFields, addCategorie } = React.useContext(TodoContext);
    const [taskName, setTaskName] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleAddTodo = () => {
        // Verificar si algún campo está vacío
        if (taskName.trim() === '') {
            setError(true); // Mostrar mensaje de error si falta algún campo
            return;
        }

        // Si todos los campos están completos, agregar la tarea
        addTodo(taskName, false);
        setTaskName(''); // Limpiar input después de agregar
        setError(false); // Limpiar el mensaje de error si todo está bien
        openWindow(false);
        clearFields(); // Limpiar campos adicionales
    };

    const addCategory = () => {
        addCategorie("hola", "hola");
    };

    return (
        <Ventana>
            <ContCabecera>
                <Titulo>Crear</Titulo>
                <CloseButton type="button" onClick={() => {
                    openWindow(false);
                    clearFields(); // Limpiar campos adicionales al cerrar
                }}>X</CloseButton>
            </ContCabecera>

            <ContVentana>
                <LabelDato>Nombre</LabelDato>
                <InputText 
                    placeholder="Nombre de la tarea"
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                />
            </ContVentana>

            {/* Mostrar el contenido adicional si existe */}
            {ExtraContent && (
                <ContVentana>
                    {ExtraContent()} {/* Llamar a ExtraContent */}
                </ContVentana>
            )}

            {/* Mensaje de error si algún campo está vacío */}
            {error && <p style={{ color: 'red' }}>Todos los campos son obligatorios.</p>}

            <AddButton type="button" onClick={handleAddTodo}>
                Agregar
            </AddButton>
        </Ventana>
    );
}

export { VentanaCrear };
