import { useState, useEffect, createContext } from 'react';

const authContext = createContext({});

function AuthContextProvider(props) {

    const [authState, setAuthState] = useState({user: null, status: "pending"});

    useEffect(() => {
            setAuthState({user: null, status: "done"});
        }, [])

    function login () {

        //setAuthState({user: "iede"});
    }

    function logout() {

    }
    const data = {authState: authState, login: login, logout: logout};

    return (

        <authContext.Provider value={data}>
            {/* Rest of app*/}
            {authState.status === "pending" & <h1>Fetching data, hold on</h1>}
            { authState.status === "done" && props.children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;