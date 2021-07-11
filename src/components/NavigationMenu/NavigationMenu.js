import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import {authContext} from '../../contexts/AuthContext';
import getDateFormat from '../../helpers/getDateFormat';
import styles from './NavigationMenu.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


function NavigationMenu({pathname}) {

    console.log(pathname);
    const {
        authState: {user},

    } = useContext(authContext);
    const [isActive, setActive] = useState(false);

    function toggleClass() {
        setActive(!isActive);
    }

    return (

        <nav>
            <button
                className={styles.hamburger}
                onClick={() =>
                    toggleClass()
                }
            >
                <FontAwesomeIcon
                    icon={faBars}
                />
            </button>
            <ul className={` ${styles.topnav} ${styles[isActive ? 'responsive' : null]}`}>

                <li key={'results'}>
                    <NavLink
                        to={`/results/${getDateFormat(new Date())}`}
                        className={styles['main-nav']}
                        //class .active for isActive can be found in app.css
                        isActive={() => ['results'].includes(pathname.split('/')[1])}
                        onClick={() => toggleClass()}
                    >
                        Results

                    </NavLink>
                </li>

                {user &&
                <>
                    <li key={'favorites'}>
                        <NavLink
                            to={'/favorites'}
                            className={styles['main-nav']}
                            activeClassName={styles['main-nav-active']}
                            onClick={() => toggleClass()}
                        >
                            Favorites

                        </NavLink>
                    </li>
                    <li key={'live-scores'}>
                        <NavLink
                            to={'/live-scores'}
                            className={styles['main-nav']}
                            activeClassName={styles['main-nav-active']}
                            onClick={() => toggleClass()}
                        >

                            Live scores

                        </NavLink>
                    </li>
                </>
                }
            </ul>

        </nav>

    )
}

export default NavigationMenu;
