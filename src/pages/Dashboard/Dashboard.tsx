import logo from '../../logo.svg';
import * as styles from './Dashboard.styles';
import { useMenuReferential } from './hooks/useMenuReferential';
import { MenuItem } from './MenuItem';

export function Dashboard() {
    const { weekMenu, generateWeekMenu, replaceMenuItem } = useMenuReferential();

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logoImg} alt="logo" />
                    <p className={styles.title}>A taaaaable !</p>
                </div>
                <button
                    className={styles.button}
                    onClick={generateWeekMenu}
                    data-cy='action-generate-menu'
                >
                    Générer le menu de la semaine
                </button>
            </header>
            <ul className={styles.content}>
                { weekMenu.map(meal => <MenuItem key={meal} label={meal} onClick={replaceMenuItem} />)}
            </ul>
        </div>
    );
}
