import { createContext } from 'react';

const authContext = createContext({});

function AuthContextProvider(props) {

    const data = {}

    return (

        <authContext.Provider value={data}>
            {/* Rest of app*/}
            {props.children}
        </authContext.Provider>

    );
}

export default AuthContextProvider;