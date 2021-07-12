import {useState, useEffect, createContext} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';


export const authContext = createContext({});

function AuthContextProvider({children}) {

    const history = useHistory();
    const [error, setError] = useState('');
    const [authState, setAuthState] = useState({user: null, status: 'pending'});

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            login(token);
        } else {
            setAuthState({user: null, status: 'done'});
            history.push('/');
        }

    }, []);

    async function getUserData() {

        setAuthState({user: null, status: 'pending'});

        const token = localStorage.getItem('token');

        try {
            const response = await axios.get('https://polar-lake-14365.herokuapp.com/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setAuthState({user: response.data, status: "done"});
            history.push('/myprofile');

        } catch (error) {
            setError(error);
        }


    }


    function login(token) {
        localStorage.setItem('token', token);
        jwt_decode(token);
        token && getUserData();

    }

    function logout() {

        localStorage.removeItem('token');
        setAuthState({user: null, status: "done"});

    }

    const data = {authState: authState, login: login, logout: logout};

    return (

        <authContext.Provider value={data}>
            {/* Rest of app*/}
            {authState.status === "pending" & <h1>Fetching data, hold on</h1>}
            {authState.status === "done" && children}
            {error && <p>Er is iets misgegaan met inloggen op de server</p>}
        </authContext.Provider>
    );
}

export default AuthContextProvider;