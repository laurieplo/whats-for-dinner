import logo from '../../logo.svg';
import * as styles from './Dashboard.styles';
import { useMenuReferential } from './hooks/useMenuReferential';

export function Dashboard() {
    const { weekMenu, generateWeekMenu } = useMenuReferential();

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
            <div className={styles.content}>
                { weekMenu.map(meal => <div data-cy='menu-item'>{ meal }</div>)}
            </div>
        </div>
    );
}
