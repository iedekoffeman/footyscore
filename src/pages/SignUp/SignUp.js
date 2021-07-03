import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import ColoredLine from "../../components/ColoredLine/ColoredLine";



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
            <h2>Sign up</h2>
            <ColoredLine />
            {succes && <SuccessMessage message={"Your account registration was successfully submitted"}/>}
            {loading && <p className="loading">Loading.. one moment please</p>}

            {!succes &&

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email-field">
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            placeholder="Email address"
                            {...register("email")}
                        />
                    </label>

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
                        disabled={loading}
                    >
                        Sign up
                    </button>
                </form>
            }
            <p className="form-link">Sign in  <Link to="/signin">here</Link></p>

        </>
    );
}

export default SignUp;