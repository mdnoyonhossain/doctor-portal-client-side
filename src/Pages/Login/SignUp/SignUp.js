import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, singInWithGoogle, userUpdateProfileName } = useContext(AuthContext);
    const [createdUserEmail, setcreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updatePorfileName(data.name);
                saveUser(data.name, data.email);
                console.log(user);
                toast.success('SignUp Successfully')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const googleSignIn = () => {
        singInWithGoogle()
            .then(resutl => {
                const user = resutl.user;
                console.log(user);
                toast.success('Google SignIn Successfully')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const updatePorfileName = name => {
        const profile = {
            displayName: name
        }
        userUpdateProfileName(profile)
            .then(() => {

            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })
    }

    const saveUser = (name, email) => {
        const user = {name, email}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setcreatedUserEmail(email)
                }
            })
    }


    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white border text-black my-20 m-auto">
            <h1 className="text-2xl font-bold text-center mb-7">Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignUp)} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-black">Name</label>
                    <input type="text" {...register('name', { required: 'Name is required' })} id="username" className="w-full px-4 py-3 rounded-md border-gray-700 border text-gray-800 focus:border-violet-400" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input type="email" {...register('email', { required: 'Password is required' })} id="email" className="w-full px-4 py-3 rounded-md border-gray-700 border text-gray-800 focus:border-violet-400" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-black">Password</label>
                    <input type="password" {...register('password', { required: 'Password is required' })} className="w-full px-4 py-3 rounded-md border-gray-700 border text-gray-800 focus:border-violet-400" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <div className="flex justify-start text-xs text-gray-800">
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded text-white bg-[#3A4256]">REGISTER</button>

                <p className="text-xs text-center sm:px-6 text-gray-800">Already Have an Account?
                    <Link to="/login" className="text-red-600"> Login</Link>
                </p>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-gray-800">OR</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <button onClick={googleSignIn} className="btn btn-outline block w-full p-3 text-center rounded">CONTINUE WITH GOOGLE</button>

        </div>
    );
};

export default SignUp;