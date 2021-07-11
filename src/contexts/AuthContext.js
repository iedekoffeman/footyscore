import { useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import axios from 'axios';


export const authContext = createContext({});

function AuthContextProvider({children}) {

    const history = useHistory();
    const [error, setError] = useState('');
    const [authState, setAuthState] = useState({user: null, status: 'pending'});

    useEffect(() => {

        const token = localStorage.getItem('token');
        console.log("token", token);
        if (token) {
            console.log("tok", token);
            login(token);
        } else {
            setAuthState({user: null, status: 'done'});
            history.push('/');
        }

        },  []);

    async function getUserData() {

        setAuthState({user: null, status: 'pending'  });
        console.log("Data van gebruiker", data);

        const token = localStorage.getItem('token');

        try {
            const response = await axios.get('https://polar-lake-14365.herokuapp.com/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            setAuthState({user: response.data, status: "done"});
            history.push('/myprofile');

        } catch (error) {
            console.log("ERROR?", error);
            setError(error);
        }



    }


    function login (token) {
        console.log("Do we have token", token);
        localStorage.setItem('token', token);
        const dataFromToken = jwt_decode(token);
        console.log(dataFromToken.sub);
        const userData =  getUserData();
        console.log("Do we get data", userData);

    }

    function logout() {

        localStorage.removeItem('token');
        setAuthState({user: null, status: "done"});

    }
    const data = {authState: authState, login: login, logout: logout};

    return (

        <authContext.Provider value={data}>
            {/* Rest of app*/}
            { authState.status === "pending" & <h1>Fetching data, hold on</h1>}
            { authState.status === "done" && children}
            { error && <p>Er is iets misgegaan met inloggen op de server</p>}
        </authContext.Provider>
    );
}

export default AuthContextProvider;