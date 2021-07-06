import React, {useContext} from 'react';
import {authContext} from "../../contexts/AuthContext";
import ColoredLine from "../../components/ColoredLine/ColoredLine";
import {Link} from "react-router-dom";


function FavoritesPage() {

    const {
        authState: {user},

    } = useContext(authContext);

    return (
        <>
            <h2>Favorites</h2>
            <ColoredLine />

            {user ? (

                <p>At this moment we are developing this feature for signed up users, stay tuned!! </p>

            ) : (
                <p>You are not signed in, sign in <Link to="/signin">here</Link></p>
            )
            }
        </>
    )


}

export default FavoritesPage;