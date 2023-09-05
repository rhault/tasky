import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialState){
  const [item, setItem] = useState(initialState);
  
  useEffect(() => {
    try{
      const getLocalStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if(!getLocalStorageItem){
        parsedItem = localStorage.setItem(itemName, JSON.stringify(initialState)) 
      }else{
        parsedItem = JSON.parse(getLocalStorageItem);
        setItem(parsedItem)
      }
    }catch(err){
      //here erro
    }
  }, [])

    const updateItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, updateItem]
  }

  export {useLocalStorage}


  /* const tasks = [
    {title:"task 1", text:"text 1. vamos testar o tamanho que vai tomar o grid com um texto longo", completed: true},
    {title:"task 2", text:"text 2", completed: false},
    {title:"task 3", text:"text 3", completed: false},
    {title:"task 4", text:"text 4", completed: true},
    {title:"task 5", text:"text 5", completed: false},
    {title:"task 6", text:"text 6", completed: false}
  ]
  localStorage.setItem('TODO_V1', tasks) */
/* localStorage.removeItem('TODO_V1') */