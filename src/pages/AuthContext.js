import { useState, createContext } from 'react';

const authContext = createContext({});

function AuthContextProvider(props) {

    const [authstate, setAuthState] = useState({user: null, status: "pending"});


    function login () {

        //setAuthState({user: "iede"});
    }

    function logout() {

    }

    const data = {}

    return (

        <authContext.Provider value={data}>
            {/* Rest of app*/}
            {props.children}
        </authContext.Provider>

    );
}

export default AuthContextProvider;