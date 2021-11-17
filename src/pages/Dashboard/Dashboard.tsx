import { ChangeEvent, useState } from 'react';
import logo from '../../logo.svg';
import * as styles from './Dashboard.styles';
import { useMenuReferential } from './hooks/useMenuReferential';
import { MenuItem } from './MenuItem';

const defaultMenuSize = 5;
const radix = 10;

export function Dashboard() {
    const { weekMenu, generateWeekMenu, replaceMenuItem } = useMenuReferential();
    const [lunchCount, setLunchCount] = useState(defaultMenuSize);
    const [dinnerCount, setDinnerCount] = useState(defaultMenuSize);
    const onLunchCountChange = (e: ChangeEvent<HTMLInputElement>) => setLunchCount(parseInt(e.target.value, radix));
    const onDinnerCountChange = (e: ChangeEvent<HTMLInputElement>) => setDinnerCount(parseInt(e.target.value, radix));

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logoImg} alt="logo" />
                    <p className={styles.title}>A taaaaable !</p>
                </div>  
            </header>
            <div className={styles.container}>
                <div className={styles.configuration}>
                    <label>
                        <input type="number" data-cy="lunch-count" value={lunchCount} onChange={onLunchCountChange} className={styles.input} />
                        lunches
                    </label>
                    <label>
                        <input type="number" data-cy="dinner-count" value={dinnerCount} onChange={onDinnerCountChange} className={styles.input} />
                        dinners
                    </label>
                    <button
                        className={styles.button}
                        onClick={() => generateWeekMenu(lunchCount + dinnerCount)}
                        data-cy='action-generate-menu'
                    >
                        Generate menu
                    </button>
                </div>
                <ul className={styles.content}>
                    { weekMenu.map(meal => <MenuItem key={meal} label={meal} onClick={replaceMenuItem} />)}
                </ul>
            </div>
        </div>
    );
}
