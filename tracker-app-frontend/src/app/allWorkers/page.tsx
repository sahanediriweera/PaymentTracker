'use client'

import { useAppSelector,useAppDispatch } from "@/lib/hooks";
import { getCookie } from "cookies-next";
import { useEffect,useState } from "react";
import axios from "axios";
import { setToken } from "@/lib/features/jwtSlice";
import { TokenData } from "@/lib/types/TokenData.type";
import { User } from "@/lib/types/allworker.user.type";


export default function AllWorkersPage(){
    const dispatch = useAppDispatch();
    let tokenData : TokenData = useAppSelector((state) => state.tokenReducer);
    if(tokenData.token === ''){
        dispatch(setToken({token: getCookie('token')?.toString() ?? '', role: tokenData.role ?? ''}))
    }

    const [userData,setUserData] = useState([])
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        
        const fetchSiteData = async()=>{
            axios.get(`http://localhost:3001/users/bySite/1`,{
                headers: {
                    Authorization: `Bearer ${tokenData.token}`,
                }
            }).then(response => {
                console.log(response.data);
                setUserData(response.data);
                setLoading(true);
            });
        }

        fetchSiteData();

    },[]);



    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          {!loading ? (
            <p className="text-black">Loading...</p>
          ) : (
            <table className="bg-white rounded-md shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-black">Name</th>
                  <th className="py-2 px-4 text-black">Email</th>
                  <th className="py-2 px-4 text-black">Role</th>
                  <th className="py-2 px-4 text-black">Site</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user: User) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 text-black">{user.name}</td>
                    <td className="py-2 px-4 text-black">{user.email}</td>
                    <td className="py-2 px-4 text-black">{user.role}</td>
                    <td className="py-2 px-4 text-black">{user.siteId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );
      
    
    
}