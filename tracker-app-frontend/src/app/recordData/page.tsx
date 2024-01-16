'use client'

import { useAppDispatch,useAppSelector } from "@/lib/hooks"
import { setToken } from "@/lib/features/jwtSlice"
import { getCookie } from "cookies-next"
import { useEffect,useState } from "react"
import { TokenData } from "@/lib/types/TokenData.type"
import axios from "axios"


export default function RecordData(){
    const tokenData:TokenData = useAppSelector(state => state.tokenReducer)
    const dispatch = useAppDispatch()

    const [loading,setLoading] = useState(true);
    const [fetchData,setFetchData] = useState(false);
    const [data,setData] = useState([]);

    const toggleFetchData = () => {
        setFetchData(!fetchData);
    }

    useEffect(() => {

        const getDataFromBackEnd = async() => {

            if(tokenData.token === ''){
                dispatch(setToken({token: getCookie('token')?.toString() ?? '',role: tokenData.role ?? ''}))
            }

            try{
                setLoading(true);

                const response =await axios.get(`http://localhost:3001/users/bySite/1`,{
                headers: {
                    Authorization: `Bearer ${tokenData.token}`,
                }
            })

            setData(response.data);

            }catch(err){
                console.log(err);
            }
        }

        getDataFromBackEnd();

    },[fetchData])

    return (
      <div className="flex flex-col h-screen bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gray-900 justify-center items-center">
        <div className="rounded-lg border bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 shadow-sm w-full max-w-2xl mx-auto" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-2xl text-center text-blue-700 dark:text-blue-400">Employee Profile</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Detailed profile and salary advancements of the employee.
            </p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <img
                  src="/placeholder.svg"
                  alt="Employee Image"
                  className="mx-auto rounded-full h-32 w-32 object-cover border-4 border-blue-500 dark:border-blue-400"
                  width="200"
                  height="200"
                  style={{ aspectRatio: '200 / 200', objectFit: 'cover' }}
                />
                <h2 className="text-xl text-center mt-2 text-blue-700 dark:text-blue-400">John Doe</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
              <div className="w-full md:w-1/2">
                <table className="w-full table-auto">
                  <thead className="bg-blue-200 dark:bg-blue-700">
                    <tr>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Previous Salary</th>
                      <th className="px-4 py-2">Advanced Salary</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="bg-blue-100 dark:bg-blue-800">
                      <td className="border px-4 py-2">01/01/2024</td>
                      <td className="border px-4 py-2">$5000</td>
                      <td className="border px-4 py-2">$5500</td>
                    </tr>
                    <tr className="bg-blue-200 dark:bg-blue-700">
                      <td className="border px-4 py-2">01/06/2024</td>
                      <td className="border px-4 py-2">$5500</td>
                      <td className="border px-4 py-2">$6000</td>
                    </tr>
                    <tr className="bg-blue-100 dark:bg-blue-800">
                      <td className="border px-4 py-2">01/12/2024</td>
                      <td className="border px-4 py-2">$6000</td>
                      <td className="border px-4 py-2">$6500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-6 flex flex-col items-center space-y-2">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-500 to-teal-500 text-white hover:bg-gradient-to-r from-green-600 to-teal-600 h-10 px-4 py-2 w-full">
              Download Profile &amp; Salary Details
            </button>
            <a className="text-sm text-gray-500 dark:text-gray-400 hover:underline" href="#">
              Back to Dashboard
            </a>
          </div>
        </div>
      </div>
    );
    
}