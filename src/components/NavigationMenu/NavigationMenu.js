import {NavLink} from "react-router-dom";
import getDateFormat from "../../helpers/getDateFormat";
import styles from './NavigationMenu.module.css';


function NavigationMenu(props) {

    console.log(props.pathname);

    return (

        <nav>
            <ul>


                <li key={"results"}>
                    <NavLink
                        to={`/results/${getDateFormat(new Date())}`}
                        className={styles['main-nav']}
                        //class .active for isActive can be found in app.css
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
