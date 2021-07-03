import React, { useContext } from 'react';
import { authContext} from "../../contexts/AuthContext";
import styles from './MyProfile.module.css';
import {Link} from "react-router-dom";
import ColoredLine from "../../components/ColoredLine/ColoredLine";

function MyProfile() {

    const {
        authState: {user},

    } = useContext(authContext);
    console.log("UserInfo", user);
    console.log("user", user.username);

    return (
        <>
            <h2>My Profile</h2>
            <ColoredLine />
        <div className={styles['myprofile-flex-wrapper']}>
            <p>Hello {user && user.username} </p>

            <p>You're signed in, see your username and e-mailaddress below:</p>

            <p>
                <strong>ID:</strong> {user && user.id}

            </p>
            <p>
                <strong>username:</strong> {user && user.username}

            </p>
            <p>
                <strong>E-mail:</strong> {user && user.email}

            </p>

            <p>To logout, click sign-out under the account menu or sign-out <Link to="/signout">here</Link></p>
        </div>
        </>
    );
}

export default MyProfile;