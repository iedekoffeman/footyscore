import React, { useContext } from 'react';
import { authContext} from "../contexts/AuthContext";

function MyProfile() {

    const {authState: user} = useContext(authContext);
    console.log("UserInfo", user);

    return (
        <>
            <h2>My Profile</h2>

            <p>
                <strong>username:</strong>{" "}
                {user && user.username}

            </p>
            <p>
                <strong>E-mail:</strong>{" "}
                {user && user.email}

            </p>

        </>
    );
}

export default MyProfile;