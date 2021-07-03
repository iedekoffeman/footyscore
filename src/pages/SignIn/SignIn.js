import React, {useContext} from 'react';
import  {useForm}  from 'react-hook-form'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {authContext} from '../../contexts/AuthContext'


function SignIn() {
    const { handleSubmit, register } = useForm();
    const {login} = useContext(authContext);

    async function onSubmit(data) {
        console.log(data);
        try {

            console.log(data);
            const response = await axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signin",

                {
                    username: data.username,
                    password: data.password,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
            console.log(response.data.accessToken);
            login(response.data.accessToken);

        } catch(error) {

            console.log("Error?", error);
        }

    }

    return (
        <>
            <h2>Sign in</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username-field">
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        placeholder="Username"
                        {...register("username")}
                    />
                </label>

                <label htmlFor="password-field">
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                </label>
                <button
                    type="submit"
                    className="form-button"
                >
                    Sign in
                </button>
            </form>
            <p className="form-link">No account yet? <Link to="/signup">Sign-up</Link> Here.</p>
        </>
    );
}

export default SignIn;