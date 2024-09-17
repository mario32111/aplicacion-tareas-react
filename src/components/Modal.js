import React from 'react';
import ReactDOM from 'react-dom'
import '../assets/style.css';  // Importa la hoja de estilos

function Modal ( {children, containerId} ) 
{
    const cont = document.getElementById(containerId)
    if(!containerId ==="sidbar"){
        cont.classList.add('modal')
    }



    return ReactDOM.createPortal(
        <>
            {children}
        </>,
        document.getElementById(containerId)
    );
}

export {Modal}