import React from 'react';
import styled from "styled-components";

const SearchBar = styled.input`
  width: 80%;
  padding-left: 12px;
  display: block;
  border-radius: 8px;
  border: 1px solid #a7a7a7;
  height: 25px;
  margin: auto 0;
  outline: none; /* Opcional: elimina el borde de enfoque predeterminado del navegador */

`;


function TodoSearch({searchValue, setSearchValue}) {


    return (
      <SearchBar 
        placeholder="Cortar cebolla"
        value = {searchValue}
        onChange= {(event) => {
        setSearchValue(event.target.value)

      }}/>
    )
  }

export { TodoSearch };