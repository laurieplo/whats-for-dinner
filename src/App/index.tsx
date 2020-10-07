import React from 'react';
import logo from './../logo.svg';
import styles from './index.module.scss';
import menuReferential from './referential'

interface Props {}
interface State {
    menu: string[]
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            menu: []
        }
    }

    generateMenu() {
        menuReferential.sort(function() { return 0.5 - Math.random()});
        this.setState({
            menu: menuReferential.slice(1, 6)
        });
    }

    render() {
        return (
            <div className={styles.App}>
                <header className={styles.AppHeader}>
                    <div className={styles.AppLogo}>
                        <img src={logo} className={styles.AppLogoImg} alt="logo" />
                        <p className={styles.AppTitle}>A taaaaable !</p>
                    </div>
                    <button
                        className={styles.AppButton}
                        onClick={() => this.generateMenu()}
                        data-cy='action-generate-menu'
                    >
                        Générer le menu de la semaine
                    </button>
                </header>
                <div className={styles.AppContent}>
                    { this.state.menu
                        .map(meal => <div className={styles.AppMenuItem} data-cy='menu-item'>{ meal }</div>)
                    }
                </div>
            </div>
        );
    }
}

export default App;
