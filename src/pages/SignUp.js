import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function SignUp() {
    const history = useHistory();
    const {handleSubmit, register} = useForm();
    const [succes, setSucces] = useState(false);
    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        console.log("Data van gebruiker", data);

        try {
            setLoading(true);
            const response = await axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signup",

                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    role: ["user"]
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
            console.log(response);
            setSucces(true);
            setTimeout(() => history.push('/signin'), 2000);
        } catch (error) {
            console.log("ERROR?", error);
        }

        setLoading(false);

    }

    return (
        <>
            <h2>Registreren</h2>
            <p>{succes && "Your account is registrated successfully"}</p>
            <p>{loading && "Loading.. one moment please"}</p>

            {!succes &&

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
                        disabled={loading}
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