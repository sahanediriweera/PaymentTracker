'use client'

import React from "react";
import { setToken } from "@/lib/features/jwtSlice";
import { useAppDispatch } from "@/lib/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function LoginPage(){
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formSubmission = async(e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    
    await axios.post('http://localhost:3001/auth/login', {
      email: email,
      password: password
    }).then(response=>response.data).then((data)=> {
      if(data){
        dispatch(setToken({
          token: data.accessToken,
          role: data.role
        }));

        setCookie('token', data.accessToken)
        router.push('/signup');
      }
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Login</h1>
        <form id="loginForm" onSubmit={(e) => formSubmission(e)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-purple-800">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 text-purple-800"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-purple-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 text-purple-800"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
  };
  