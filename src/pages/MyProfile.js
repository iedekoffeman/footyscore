import React, { useContext } from 'react';
import { authContext} from "../contexts/AuthContext";

function MyProfile() {

    const authInfo = useContext(authContext);
    console.log("UserInfo", authInfo);

    return (
        <>
            <h2>My Profile</h2>

            <p>
                <strong>username:</strong>{" "}
                {authInfo.authState.user && authInfo.authState.user.username}

            </p>
            <p>
                <strong>E-mail:</strong>{" "}
                {authInfo.authState.user && authInfo.authState.user.email}

            </p>

        </>
    );
}

export default MyProfile;