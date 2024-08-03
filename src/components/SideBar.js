import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineExclamationCircle, AiOutlineAppstore, AiOutlineCheckSquare } from 'react-icons/ai';

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
                <Icon><AiOutlineAppstore size={24} /></Icon>
                Mis Categorías
            </SidebarItem>
            <SidebarItem>
                <Icon><AiOutlineHome size={24} /></Icon>
                Home
            </SidebarItem>
            <SidebarItem>
                <Icon><AiOutlineExclamationCircle size={24} /></Icon>
                Important
            </SidebarItem>
            <SidebarItem>
                <Icon><AiOutlineAppstore size={24} /></Icon>
                Mis Categorías
            </SidebarItem>
            <SidebarItem>
                <Icon><AiOutlineCheckSquare size={24} /></Icon>
                Mis Tareas
            </SidebarItem>
        </SidebarContainer>
    );
}

export default SideBar;
