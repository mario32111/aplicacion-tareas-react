import React from 'react';
import styled from 'styled-components';
import {AiOutlineAppstore} from 'react-icons/ai';

const SidebarContainer = styled.div`
    width: 65px;
    height: 100%;
    max-height: 60px;
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



const SideBar = ({openWindow}) => {
    const closeSideBar = () =>{
        openWindow(true);

    }
    return (
        <SidebarContainer>
            <SidebarItem onClick={closeSideBar}>
                <Icon><AiOutlineAppstore size={24} /></Icon>
            </SidebarItem>
        </SidebarContainer>
    );
}

export default SideBar;
