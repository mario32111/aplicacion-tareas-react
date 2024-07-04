import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faExclamationCircle, faList, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
    width: 200px;
    height: 80%;
    background-color: #333;
    color: white;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    border-bottom-right-radius: 10px;

`;

const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;

const Icon = styled.div`
    margin-right: 12px;
`;

const SideBar = () => {
    return (
        <SidebarContainer>
            <SidebarItem>
                <Icon><FontAwesomeIcon icon={faList} /></Icon>
            </SidebarItem>
            <SidebarItem>
                <Icon><FontAwesomeIcon icon={faHome} /></Icon>
                Home
            </SidebarItem>
            <SidebarItem>
                <Icon><FontAwesomeIcon icon={faExclamationCircle} /></Icon>
                Important
            </SidebarItem>
            <SidebarItem>
                <Icon><FontAwesomeIcon icon={faList} /></Icon>
                Mis Categorías
            </SidebarItem>
            <SidebarItem>
                <Icon><FontAwesomeIcon icon={faCheckSquare} /></Icon>
                Mis Tareas
            </SidebarItem>
        </SidebarContainer>
    );
}

export default SideBar;
