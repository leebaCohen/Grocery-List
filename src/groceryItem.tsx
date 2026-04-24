import styles from './groceryItem.module.css';
import style from './Button.module.css';

interface GroceryItemProps {
    id: number;
    item: string;
    status: 'bought' | 'unbought';
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function GroceryItem({ id, item, status, onToggle, onDelete }: GroceryItemProps) {
    return (
        <li className={styles.groceryItem}>
            {item}
            <button className={style.mybutton} onClick={() => onToggle(id)}>
                {status === 'bought' ? '✅' : '🔲'}
            </button>

            <button className={style.mybutton} onClick={() => onDelete(id)}>
                🗑️
            </button>
        </li>
    );
}
