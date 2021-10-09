import React, { useCallback, useState } from 'react';
import logo from './../logo.svg';
import styles from './index.module.scss';
import { menuReferential } from './data/menuReferential';
import { shuffle } from './App.utils';

export function App() {
    const [menu, setMenu] = useState<Array<string>>([]);
    const generateMenu = useCallback(() => {
        setMenu(shuffle(menuReferential).slice(0, 5));
    }, [setMenu]);

    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                <div className={styles.AppLogo}>
                    <img src={logo} className={styles.AppLogoImg} alt="logo" />
                    <p className={styles.AppTitle}>A taaaaable !</p>
                </div>
                <button
                    className={styles.AppButton}
                    onClick={generateMenu}
                    data-cy='action-generate-menu'
                >
                    Générer le menu de la semaine
                </button>
            </header>
            <div className={styles.AppContent}>
                { menu.map(meal => <div className={styles.AppMenuItem} data-cy='menu-item'>{ meal }</div>)}
            </div>
        </div>
    );
}
