import React, { useState } from 'react';
import styles from './Button.module.css';

type AddFormProps = {
    onAdd: (name: string) => void;
};

export default function AddForm({ onAdd }: AddFormProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents page reload
        if (!inputValue.trim()) return; // Don't add empty items
        
        onAdd(inputValue);
        setInputValue(''); // Clear the box after adding
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter item name..."
            />
            <button className={styles.mybutton} type="submit">Add Item</button>
        </form>
    );
}
