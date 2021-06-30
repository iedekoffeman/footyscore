import {NavLink} from "react-router-dom";
import {format} from "date-fns";
import styles from './NavigationMenu.module.css';


function NavigationMenu(props) {



    return (

        <nav>
            <ul>
                {/*Dit wordt later vervangen door link to*/}

                <li key={"results"}>
                    <NavLink
                        to={`/results/${format(new Date(), 'yyyy-MM-dd')}`}
                        className={styles['main-nav']}
                        isActive={() => ['results'].includes(props.pathname.split('/')[1])}
                    >
                        Results

                    </NavLink>
                </li>
                <li key={"favorites"}>
                    <NavLink
                        to={"/favorites"}
                        className={styles['main-nav']}
                        activeClassName={styles['main-nav-active']}
                    >
                        Favorites

                    </NavLink>
                </li>
                <li key={"live-scores"}>
                    <NavLink
                        to={"/live-scores"}
                        className={styles['main-nav']}
                        activeClassName={styles['main-nav-active']}
                    >

                        Live scores

                    </NavLink>
                </li>
            </ul>

        </nav>

    )
}

export default NavigationMenu;
