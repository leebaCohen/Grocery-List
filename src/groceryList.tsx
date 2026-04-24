
import GroceryItem from './groceryItem'; 

interface GroceryItemType {
    id: number; 
    itemName: string;
    status: 'bought' | 'unbought';
}


interface GroceryListProps {
    groceryList: GroceryItemType[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function GroceryList({ groceryList, onToggle, onDelete }: GroceryListProps) {

    if (!groceryList || groceryList.length === 0) {
        return <p>You have no items currently on your grocery List</p>;
    }

    return (
        <ul>
            {groceryList.map((item: GroceryItemType) => (
                <GroceryItem 
                    key={item.id} 
                    id={item.id}
                    item={item.itemName} 
                    status={item.status}
                    onToggle={onToggle}  
                    onDelete={onDelete}  
                />
            ))}
        </ul>
    );
}
