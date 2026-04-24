import { useState, useEffect } from 'react'

import './App.css'
import GroceryList from './groceryList'
import AddForm from './AddForm'

import styles from './header.module.css';


interface GroceryItemType {
    id: number; 
    itemName: string;
    status: 'bought' | 'unbought';
}

  export default function App() {
    const [groceryList, setGroceryList] = useState<GroceryItemType[]>(() => {
    const savedList = localStorage.getItem('my_grocery_list');
  
    try {
        return savedList ? JSON.parse(savedList) : [];
    } catch {
        return []; 
    }
  });


  useEffect(() => {
    localStorage.setItem('my_grocery_list', JSON.stringify(groceryList));
  }, [groceryList]);


  
  
  
  const handleAddItem = (name: string) => {
      const newItem: GroceryItemType = {
          id: Date.now(), 
          itemName: name,
          status: 'unbought'
      };
      setGroceryList([...groceryList, newItem]);
  };


  const handleDeleteItem = (idToDelete: number) => {
      const updatedList = groceryList.filter(item => item.id !== idToDelete);
      setGroceryList(updatedList);
      
    };


  const handleUpdateStatus = (id: number) => {
      setGroceryList(prevList => 
      prevList.map(item => 
        item.id === id 
          ? { ...item, status: item.status === 'bought' ? 'unbought' : 'bought' } 
          : item
      )
  );
  
};

  return (
    <>
      <div className={styles.myHeader}>
      <h1 >Grocery List</h1>
      <p>Keep a convenient and dynamic grocery list, with the ablity to add, remove or mark items as bought.</p>
      </div>
      
      <AddForm onAdd={handleAddItem} />

      <GroceryList 
        groceryList={groceryList} 
        onToggle={handleUpdateStatus} 
        onDelete={handleDeleteItem}
      />

    </>
  );
}  

  