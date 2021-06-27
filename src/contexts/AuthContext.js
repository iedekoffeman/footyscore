import { useState, useEffect, createContext } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

export const authContext = createContext({});

function AuthContextProvider(props) {

    const history = useHistory();
    const [authState, setAuthState] = useState({user: null, status: "pending"});

    useEffect(() => {
            setAuthState({user: null, status: "done"});
        }, [])

    async function getUserData() {

        setAuthState({user: null, status: "pending"});
        console.log("Data van gebruiker", data);

        try {
            const response = await axios.get("https://polar-lake-14365.herokuapp.com/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            setAuthState({user: response.data, status: "done"});
            history.push('/myprofile');

        } catch (error) {
            console.log("ERROR?", error);
        }



    }


    function login (token) {
        console.log("Do we have token", token);
        localStorage.setItem('token', token);
        const dataFromToken = jwt_decode(token);
        console.log(dataFromToken.sub);
        const userData =  getUserData(token);
        console.log("Do we get data", userData);

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