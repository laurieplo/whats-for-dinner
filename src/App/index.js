import React from 'react';
import logo from './../logo.svg';
import styles from './index.module.scss';
import menuReferential from './referential'

function MenuItem(props) {
    return (
        <div className={styles.AppMenuItem} data-cy='menu-item'>{ props.content }</div>
    );
}

function Menu(props) {
    return props.content
        .map(item => (
            <MenuItem content={item} />
        )
    );
}

class App extends React.Component {
    constructor(props) {
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
                    <img src={logo} className={styles.AppLogo} alt="logo" />
                    <p>Bienvenue à table !</p>
                    <button
                        className={styles.AppButton}
                        onClick={() => this.generateMenu()}
                        data-cy='action-generate-menu'
                    >
                        Générer le menu de la semaine
                    </button>
                </header>
                <div className={styles.AppContent}>
                    <Menu content={this.state.menu} />
                </div>
            </div>
        );
    }
}

export default App;
