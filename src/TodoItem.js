function TodoItem( {nombre, completed} ) {
    return (
      <li>
        <span>V</span>
        <p>{nombre}</p>
        <span>X</span>
      </li>
    )
  }

export {TodoItem}