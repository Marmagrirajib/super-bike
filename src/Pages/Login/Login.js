import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Share/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const[token]=useToken(gUser||user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let signInError;

    if (token) {
        navigate(from, { replace: true });
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-600'>{error?.message || gError?.message}</p>
    }


    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
       
    }




    return (
        <div className=' h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Email here" class="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.pattern?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label>
                        </div>



                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password" placeholder="Password here" class="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}


                            </label>
                        </div>



                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>

                    <p className='text-center'>New to Super Bike? <Link className='text-emerald-600' to='/register'>Create an Account</Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-active bg-emerald-600 border-0">Sign In with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;