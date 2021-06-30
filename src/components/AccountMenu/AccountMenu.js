import {useContext} from 'react'
import {format} from "date-fns";
import styles from './AccountMenu.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {faIdCardAlt} from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {authContext} from "../../contexts/AuthContext";

function AccountMenu(props) {

    const {
        logout,
        authState: {user},

    } = useContext(authContext);

    return (
            <div className={`${styles['account-menu']} ${styles[props.show]}`} >
                <ul>
                    {!user ? (
                        <>
                            <li key={"sign-in"}>
                                <NavLink
                                    to={`/signin`}
                                    className={styles['account-nav']}
                                    activeClassName={styles['account-nav-active']}
                                >
                                    <FontAwesomeIcon icon={faSignInAlt} className={styles['account-icon']} />

                                    sign-in

                                </NavLink>
                            </li>

                            <li key={"sign-up"}>
                                <NavLink
                                    to={`/signup`}
                                    className={styles['account-nav']}
                                    activeClassName={styles['account-nav-active']}
                                >
                                    <FontAwesomeIcon icon={faUserPlus} className={styles['account-icon']} />

                                    sign-up

                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li key={"sign-out"}>
                                <NavLink
                                    to={'/signout'}
                                     className={styles['account-nav']}
                                    activeClassName={styles['account-nav-active']}
                                     onClick={logout}
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} className={styles['account-icon']} />

                                    sign-out

                                </NavLink>
                            </li>

                            <li key={"my-profile"}>
                                <NavLink
                                    to={`/myprofile`}
                                     className={styles['account-nav']}
                                    activeClassName={styles['account-nav-active']}
                                >

                                    <FontAwesomeIcon icon={faIdCardAlt } className={styles['account-icon']} />

                                    My Profile

                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>

    )
}

export default AccountMenu;
