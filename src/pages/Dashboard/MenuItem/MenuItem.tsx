import * as styles from './MenuItem.styles';
import { FaRedoAlt } from 'react-icons/fa';

interface MenuItemProps {
    label: string;
    onClick(label: string): void;
}

export function MenuItem(props: MenuItemProps) {
    const { label, onClick } = props;

    return (
        <li className={styles.container} data-cy='menu-item'>
            { label }
            <button 
                className={styles.replace} 
                data-cy='replace-menu-item' 
                aria-label="replace menu item" 
                type='button' 
                onClick={() => onClick(label)}
            >
                <FaRedoAlt />
            </button>
        </li>
    );
}
