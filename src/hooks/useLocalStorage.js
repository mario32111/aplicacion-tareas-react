import React from 'react';
/* localStorage.setItem('tareas', JSON.stringify([{text: 'cortar cebolla', completed: true},
{text: 'terminar el curso de introduccion a react', completed: false}]))
 */

function useLocalStorage(itemName, initalValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initalValue }));
  const {
    item,
    loading,
    error
  } = state;

  //action creators
  const onError = (error) => {
    dispatch({
      type: actionTypes.error,
      payload: error,
    })
  }

  const onSucces = () => dispatch({ type: actionTypes.succes })

  const onSave = (item) => {
    dispatch({
      type: actionTypes.save,
      payload: item,
    })
  }


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initalValue));
          parsedItem = initalValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          onSave(parsedItem)
        }
        //cuando todo esta correcto
        onSucces();
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, []);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    onSave(newItem)
  }


  return {
    item,
    saveItem,
    loading,
    error,
  };
}

const initialState = ({ initalValue }) => ({
  item: initalValue,
  loading: true,
  error: false,
})

const actionTypes = {
  error: 'ERROR',
  succes: 'SUCCES',
  save: 'SAVE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state, // Asegúrate de mantener el estado actual
    error: true,
    loading: false,
  },
  [actionTypes.succes]: {
    ...state,
    error: false,
    loading: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
});


const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
      return reducerObject(state, action.payload)[action.type]
  } else {
      return state;
  }
}

export { useLocalStorage }