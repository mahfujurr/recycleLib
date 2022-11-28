import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

// import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, updateUser, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const gProvider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';


    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)
    // if (token) {
    //     navigate(from, { replace: true });
    // }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setLoginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }


    const handleGoogleSign = () => {
        googleLogin(gProvider)
            .then((result) => {
                const user = result.user;
                // const currentUser = {
                //     email: user.email
                // }
                // fetch('https://your-medico-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                // .then(res => res.json())
                // .then(data => {
                //     console.log(data)
                //     localStorage.setItem('token', data.token);
                //     navigate(from, { replace: true });
                // })
                const role = 'buyer'
                const userInfo = {
                    role: role
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(user.displayName, user.email, role);
                        saveUser(user.displayName, user.email, role);
                    })
                    .catch(err => console.log(err));
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log(error)

            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://recyclelib-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email);
            })
    }

    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='px-3 py-2 rounded-xl text-white bg-black border-2 hover:bg-white hover:text-black w-full ' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>Don't have an account? <Link className='text-purple-400' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <div className="flex items-center  space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSign} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;