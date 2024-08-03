import React from 'react';

function useOpenWindow(state){
    const [openWindow, setOpenWindow]= React.useState(state);

    React.useEffect(()=> {
        console.log("hola")
    },[openWindow]);

    return {
      openWindow,
      setOpenWindow,
    };
  }

  export {useOpenWindow}