import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { createUserAsync, selectUser } from '../authSlice';
import { createUser } from '../authAPI';

export default function Signup() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, formState: {errors} } = useForm();

  console.log(errors);

  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}

    {user && <Navigate to={"/"} replace={true}></Navigate>}


    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to={"/"}>
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create An Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit((data)=>{
          console.log(data)
          dispatch(createUserAsync({email: data.email, password: data.password , addresses: []}))
        })}>
          <div>
            <label htmlFor="email" className="text-left block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", {required: "email required", pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "email is not valid"
                }})}
                id="email"
                type="email"
                // autoComplete="email"
                // required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className='text-red-500'>{errors.email && errors.email.message}</p>

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-left block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                
              </div>
            </div>
            <div className="mt-2">
              <input
                {...register("password", {required: "password required"})}
                id="password"
                type="password"
                // autoComplete="current-password"
                // required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className='text-red-500'>{errors.password && errors.password.message}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="text-sm">
               
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                {...register("confirmPassword", {required: "confirm password required", validate: (value, formValues)=> value === formValues.password || "password does not match"})}
                type="password"
                // autoComplete="current-password"
                // required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className='text-red-500'>{errors.confirmPassword && errors.confirmPassword.message}</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login Instead
          </Link>
        </p>
      </div>
    </div>
  </>
  );
}
