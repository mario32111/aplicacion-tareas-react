import React from 'react';
import { TodoContext } from './TodoContext';

import styled from 'styled-components';

const InputDate = styled.input`
    border-radius: 12px;
    height: 24px;
    border: 1px solid #a7a7a7;
    outline: none;
    padding-left: 12px;
    padding-right: 12px;
`;

const InputImportant = styled.input`
    margin-right: 12px;
`;

const TextAreaDetails = styled.textarea` 
    border-radius: 12px;
    border: 1px solid #a7a7a7;
    outline: none;
    padding: 8px 12px;
    font-size: 14px;
    resize: vertical;
    height: 60px;
`;

const Combobox = styled.select`
    border-radius: 12px;
    height: 24px;
    border: 1px solid #a7a7a7;
    outline: none;
    padding-left: 12px;
    padding-right: 12px;
`;

const ContImportant = styled.div`
    display: flex;
    flex-direction: row;
`;

function AgregarTarea() {
    const { setDate, setImportant, setCategory, setDetails, date, important, category, details } = React.useContext(TodoContext);

    return (
        <>
            <p>Fecha</p>
            <InputDate type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            <ContImportant>
                <InputImportant type="checkbox" checked={important} onChange={(event) => setImportant(event.target.checked)} />
                <p>Importante</p>
            </ContImportant>
            <p>Categoría</p>
            <Combobox value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">Seleccione una categoría</option>
                <option value="categoria1">Categoría 1</option>
                <option value="categoria2">Categoría 2</option>
                <option value="categoria3">Categoría 3</option>
            </Combobox>
            <p>Detalles</p>
            <TextAreaDetails placeholder="Escribe detalles de la tarea" value={details} onChange={(event) => setDetails(event.target.value)} />
        </>
    );
}

export { AgregarTarea, TextAreaDetails };
