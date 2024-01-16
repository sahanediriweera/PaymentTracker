'use client'

import axios from "axios";
import { useAppSelector,useAppDispatch } from "@/lib/hooks";
import { getCookie } from "cookies-next";
import { TokenData } from "@/lib/types/TokenData.type";
import { setToken } from "@/lib/features/jwtSlice";


export default function CreateSitePage(){
    
    const dispatch = useAppDispatch();
    let tokenData:TokenData = useAppSelector((state)=> state.tokenReducer);
    if(tokenData.token === ''){
        dispatch(setToken({token: getCookie('token')?.toString() ?? '', role: tokenData.role ?? ''}))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        const formData = new FormData(e.currentTarget);
        axios.post("http://localhost:3001/sites", {
            name: formData.get('siteName'),
        },{
            headers: {
                Authorization: `Bearer ${tokenData.token}`,
            },
        }).then(res=> {
            console.log(res.data);
        });
    }

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Create Site</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label htmlFor="siteName" className="block text-gray-600 text-sm font-semibold mb-2">
                Site Name
              </label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                className="w-full border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
                placeholder="Enter the site name"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400"
            >
              Create Site
            </button>
          </form>
        </div>
      </div>
    );
    
      
}