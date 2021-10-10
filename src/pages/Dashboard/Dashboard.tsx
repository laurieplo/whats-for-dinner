/** @jsxImportSource @emotion/react */

import logo from '../../logo.svg';
import * as styles from './Dashboard.styles';
import { useMenuReferential } from './hooks/useMenuReferential';

export function Dashboard() {
    const { weekMenu, generateWeekMenu } = useMenuReferential();

    return (
        <div>
            <header css={styles.header}>
                <div css={styles.logo}>
                    <img src={logo} css={styles.logoImg} alt="logo" />
                    <p css={styles.title}>A taaaaable !</p>
                </div>
                <button
                    css={styles.button}
                    onClick={generateWeekMenu}
                    data-cy='action-generate-menu'
                >
                    Générer le menu de la semaine
                </button>
            </header>
            <div css={styles.content}>
                { weekMenu.map(meal => <div data-cy='menu-item'>{ meal }</div>)}
            </div>
        </div>
    );
}
