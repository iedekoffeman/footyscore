import React from 'react';
import  {useForm}  from 'react-hook-form'
import { Link } from 'react-router-dom';

function SignIn() {
    const { handleSubmit, register } = useForm();

    function onSubmit(data) {
        console.log(data);
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