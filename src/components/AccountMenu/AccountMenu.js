import {useContext} from 'react'
import styles from './AccountMenu.module.css';
import {NavLink} from "react-router-dom";
import {authContext} from "../../contexts/AuthContext";

function AccountMenu(props) {

    const {
        logout,
        authState: {user},

    } = useContext(authContext);

    return (
            <div className={`${styles['account-menu']} ${props.show}`} >
                <ul>
                    {!user ? (
                        <>
                            <li key={"sign-in"}>
                                <NavLink
                                    to={`/signin`}
                                    className={styles['account-nav']}
                                >
                                    sign-in

                                </NavLink>
                            </li>

                            <li key={"sign-up"}>
                                <NavLink
                                    to={`/signup`}
                                    className={styles['account-nav']}
                                >
                                    sign-up

                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li key={"sign-out"}>
                                <NavLink
                                    to={`/`}
                                     className={styles['account-nav']}
                                    onClick={logout}
                                >
                                    sign-out

                                </NavLink>
                            </li>

                            <li key={"my-profile"}>
                                <NavLink
                                    to={`/myprofile`}
                                     className={styles['account-nav']}
                                >
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
