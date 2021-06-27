import React from 'react';
import  {useForm}  from 'react-hook-form'
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
    const { handleSubmit, register } = useForm();

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

        } catch(error) {

            console.log("Error?", error);
        }

    }

    return (
        <>
            <h2>Inloggen</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username-field">
                    Username:
                    <input
                        type="email"
                        id="username-field"
                        name="username"
                        {...register("username")}
                    />
                </label>

                <label htmlFor="password-field">
                    Password:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
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
            <p>If you don't have an account <Link to="/signup">Sign-up</Link> Here.</p>
        </>
    );
}

export default SignIn;