import React from 'react';
import styled from 'styled-components';

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
`;

const Titulo = styled.h1`
`;

const ContVentana = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 24px;
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
        background-color: #gray;
    }
    
`;

const ContCabecera = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
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
    return (
        <Ventana>
            <ContCabecera>
                <Titulo>Crear</Titulo>
                <CloseButton type="button"
                    onClick={(event) => {
                        console.log('le diste click')
                        console.log(event)
                        console.log(event.target)
                        openWindow(false);
                    }
                    }>X</CloseButton>
            </ContCabecera>
            <ContVentana>
                <LabelDato>Nombre</LabelDato>
                <InputText placeholder="Nombre de la tarea"></InputText>
            </ContVentana>

            {/* Renderizar ExtraContent si está definido */}
            {ExtraContent && (
                <ContVentana>
                    {ExtraContent()} {/* Llamar a ExtraContent como una función para renderizar */}
                </ContVentana>
            )}

            <AddButton type="button">Agregar</AddButton>
        </Ventana>
    );
}

export { VentanaCrear, InputText };
