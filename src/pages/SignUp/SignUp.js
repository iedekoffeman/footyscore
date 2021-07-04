import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ColoredLine from "../../components/ColoredLine/ColoredLine";



function SignUp() {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});
    const [succes, setSucces] = useState(false);
    const [error, setError] = useState(false);
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
            console.log("ERROR?", error.response.data);
            setError(error.response.data.message);
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
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                                pattern: {
                                    value: /^\S+@\S+$/i ,
                                    message: "Please include an '@' in the email addresss",
                                }

                            })}
                        />

                        {errors.email && <ErrorMessage message={errors.email.message}/>}

                    </label>

                    <label htmlFor="username-field">
                        <input
                            type="text"
                            id="username-field"
                            name="username"
                            placeholder="Username"
                            {...register("username", {

                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                                minLength:  {
                                    value: 6,
                                    message: "A username must contain at least 6 characters",
                                }

                            })}

                        />

                        {errors.username && <ErrorMessage message={errors.username.message}/>}

                    </label>

                    <label htmlFor="password-field">
                        <input
                            type="password"
                            id="password-field"
                            name="password"
                            placeholder="Password"
                            {...register("password", {

                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                                minLength:  {
                                    value: 6,
                                    message: "A password must contain at least 6 characters",
                                }


                            })}

                        />

                        {errors.password && <ErrorMessage message={errors.password.message}/>}

                    </label>

                    {error && <ErrorMessage message={error} />}

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