import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {authContext} from '../../contexts/AuthContext';
import styles from './MyProfile.module.css';
import ColoredLine from '../../components/ColoredLine/ColoredLine';

function MyProfile() {

    const {
        authState: {user},

    } = useContext(authContext);
    console.log("UserInfo", user);
    console.log("user", user.username);

    return (
        <>
            <h2>My Profile</h2>
            <ColoredLine/>
            <div className={styles['myprofile-flex-wrapper']}>
                <p>Hello {user && user.username} </p>

                <p>You're signed in, see your username and e-mailaddress below:</p>

                <p>
                    ID: {user && user.id}

                </p>
                <p>
                    username: {user && user.username}

                </p>
                <p>
                    E-mail: {user && user.email}

                </p>

                <p>To logout, click sign-out under the account menu or sign-out <Link to='/signout'>here</Link></p>
            </div>
        </>
    );
}

export default MyProfile;