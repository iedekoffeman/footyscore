import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function SignUp() {
    const {handleSubmit, register} = useForm();
    const [succesMessage, setSuccesMessage] = useState("");

    async function onSubmit(data) {
        console.log("Data van gebruiker", data);

        try {
            const response = await axios.post("https://polar-lake-14365.herokuapp.com/auth/signup",

                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    user: ["user"]
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
            console.log(response);
            setSuccesMessage("Your account is registrated successfully");
        } catch (error) {
            console.log("ERROR?", error);
        }

    }

    return (
        <>
            <h2>Registreren</h2>
            <p>{succesMessage}</p>

            {!succesMessage &&

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email-field">
                        Email:
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            {...register("email")}
                        />
                    </label>

                    <label htmlFor="username-field">
                        Gebruikersnaam:
                        <input
                            type="text"
                            id="username-field"
                            name="username"
                            {...register("username")}
                        />
                    </label>

                    <label htmlFor="password-field">
                        Wachtwoord:
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
                        Maak account aan
                    </button>
                </form>
            }
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>

        </>
    );
}

export default SignUp;