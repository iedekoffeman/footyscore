import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {authContext} from '../../contexts/AuthContext';
import axios from 'axios';
import ColoredLine from '../../components/ColoredLine/ColoredLine';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


function SignIn() {

    const {handleSubmit, formState: {errors}, register} = useForm({mode: 'onBlur'});
    const {login} = useContext(authContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        setLoading(true);

        try {


            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signin',

                {
                    username: data.username,
                    password: data.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

            login(response.data.accessToken);

        } catch (error) {


            error.response.data.status === 401 ? setError('Username or password is not correct') : setError(error.response.data.error);

        }

        setLoading(false);

    }

    return (
        <>
            <h2>Sign in</h2>
            <ColoredLine/>

            {loading && <p className='loading'>Signing in.. one moment please</p>}
            {!loading &&
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='username-field'>
                        <input
                            type='text'
                            id='username-field'
                            name='username'
                            placeholder='Username'
                            {...register('username', {

                                required: {
                                    value: true,
                                    message: 'This field is required',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'A username must contain at least 6 characters',
                                }

                            })}
                        />

                        {errors.username && <ErrorMessage message={errors.username.message}/>}

                    </label>

                    <label htmlFor='password-field'>
                        <input
                            type='password'
                            id='password-field'
                            name='password'
                            placeholder='Password'
                            {...register('password', {

                                required: {
                                    value: true,
                                    message: 'This field is required',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'A password must contain at least 6 characters',
                                }


                            })}
                        />

                        {errors.password && <ErrorMessage message={errors.password.message}/>}

                    </label>

                    {error && <ErrorMessage message={error}/>}

                    <button
                        type='submit'
                        className='form-button'
                        disabled={loading}
                    >
                        Sign in
                    </button>
                </form>
                <p className='form-link'>No account yet? <Link to='/signup'>Sign-up</Link> Here.</p>
            </>
            }
        </>
    );
}

export default SignIn;