import React, { useContext } from 'react';
import { authContext} from "../../contexts/AuthContext";

function MyProfile() {

    const {
        authState: {user},

    } = useContext(authContext);
    console.log("UserInfo", user);
    console.log("user", user.username);

    return (
        <>
            <h2>My Profile</h2>

            <p>
                <strong>ID:</strong> {user && user.id}

            </p>
            <p>
                <strong>username:</strong> {user && user.username}

            </p>
            <p>
                <strong>E-mail:</strong> {user && user.email}

            </p>

        </>
    );
}

export default MyProfile;