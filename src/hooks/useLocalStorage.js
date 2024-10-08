import React from 'react';
/* localStorage.setItem('tareas', JSON.stringify([{text: 'cortar cebolla', completed: true},
{text: 'terminar el curso de introduccion a react', completed: false}]))
 */

function useLocalStorage(itemName, initalValue){
    const [item, setItem]= React.useState(initalValue);
    const [loading, setLoading]= React.useState(true)
    const [error, setError]= React.useState(false);


    React.useEffect(()=> {
      setTimeout(() =>{
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initalValue));   
            parsedItem = initalValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      }, 2000);
    },[]);


    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    
  
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage}