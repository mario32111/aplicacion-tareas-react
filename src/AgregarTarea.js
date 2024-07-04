import styled from "styled-components";

const InputDate = styled.input`
    border-radius: 12px;
    height: 24px;
    border: 1px solid #a7a7a7;
    outline: none;
    padding-left: 12px;
    padding-right: 12px;
`;

const InputImportant = styled.input`
    /* Estilos para InputImportant si es necesario */
`;

const TextAreaDetails = styled.textarea`
    border-radius: 12px;
    border: 1px solid #a7a7a7;
    outline: none;
    padding: 8px 12px; /* Padding ajustado para el área de texto */
    font-size: 14px; /* Tamaño de fuente */
    resize: vertical; /* Permite que el textarea sea redimensionable verticalmente */
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

function AgregarTarea() {

    return (
        <>
            <p>Fecha</p>
            <InputDate type="date" />
            <p>Importante</p>
            <InputImportant type="checkbox" />
            <p>Categoría</p>
            <Combobox>
                <option value="categoria1">Categoría 1</option>
                <option value="categoria2">Categoría 2</option>
                <option value="categoria3">Categoría 3</option>
            </Combobox>
            <p>Detalles</p>
            <TextAreaDetails placeholder="Escribe detalles de la tarea" />
        </>
    );
}

export { AgregarTarea, TextAreaDetails };
