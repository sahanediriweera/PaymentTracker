'use client'
import axios from "axios";
import { useAppSelector,useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { TokenData } from "@/lib/types/TokenData.type";
import { setToken } from "@/lib/features/jwtSlice";

export default function SignupPage(){
    const tokenData:TokenData = useAppSelector((state) => state.tokenReducer);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      if(tokenData.token === ''){
        dispatch(setToken({token: getCookie('token')?.toString() ?? '', role: tokenData.role ?? ''}));
      }

      console.log(tokenData.token);

        const response = await axios.post("http://localhost:3001/users", {
          name:data.get('username'),
          email:data.get('email'),
          password:data.get('password'),
          role:data.get('role'),
          siteId:parseInt(data.get('siteId')?.toString() || '0'),
        },{
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        
        }).then((res)=> {
          router.push('/allWorkers');
        });
        console.log(response);
      };

      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600 text-sm font-semibold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="role" className="block text-gray-600 text-sm font-semibold mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your Role"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="siteId" className="block text-gray-600 text-sm font-semibold mb-2">
                  Site Id
                </label>
                <input
                  type="number"
                  id="siteId"
                  name="siteId"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your SiteId"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400 transition-colors duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      );      
  };