import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { REACT_APP_HOST_API } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { setCookie } from "../utils/cookie";

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(false);


    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            navigate('/');
        }
    }, [])




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        setIsloading(true)



        const loginData = await axios.post(`${REACT_APP_HOST_API}/login`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (loginData?.data?.success) {
            // setCookie("token", loginData?.data?.token, 7)
            sessionStorage.setItem('token', loginData?.data?.token);
            setIsloading(false)
            navigate('/dashboard?tab=dashboard');
        }
        else {
            setIsloading(false)
        }
    }

    return (
        isLoading ? (
            <div className="w-full h-[74vh] flex flex-col items-center justify-center">
                <PropagateLoader
                    color="#1f2937"
                    loading
                    size={25}
                />
                <p className='text-gray-700 mt-14 text-lg'>Logging In...</p>
            </div>
        ) : (
            <form className="h-[70vh] container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700 " onSubmit={handleSubmit(onSubmit)}>
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                    <h1 className="text-4xl font-semibold">Welcome back.</h1>
                </div >
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                    <input {...register("email", { required: true })} className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Email" />
                    {errors.email && <small className='text-red-600'>This field is required</small>}
                    <input {...register("password", { required: true })} className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Password" />
                    {errors.password && <small className='text-red-600'>This field is required</small>}
                    <div className="flex items-center">
                        <div className="w-1/2 flex items-center">
                            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                            <label for="remember-me">Remember me!</label>
                        </div>
                        <button className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900" type="submit">Log In</button>
                    </div>
                </div>
            </form >
        )
    )
}

export default Login