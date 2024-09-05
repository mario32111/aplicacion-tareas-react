import React from 'react';
import ReactDOM from 'react-dom'
import '../assets/style.css';  // Importa la hoja de estilos

function Modal ( {children} ) 
{
    const cont = document.getElementById('modal')
    cont.classList.add('modal')

    return ReactDOM.createPortal(
        <>
            {children}
        </>,
        document.getElementById('modal')
    );
}

export {Modal}