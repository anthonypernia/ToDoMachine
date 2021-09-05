import React from "react";


function useLocalStorage(itemname, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemname);
  
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemname, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(true)
        }
      }, 1000);
    },[]);
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemname, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(true)
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export {useLocalStorage};