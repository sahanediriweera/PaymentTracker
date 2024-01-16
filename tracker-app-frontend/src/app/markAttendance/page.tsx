'use client';
import { useAppDispatch,useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { getCookie } from "cookies-next";
import { setToken } from "@/lib/features/jwtSlice";
import { useRouter } from "next/navigation";

export default function MarkAttendancePage(){

    const tokenData = useAppSelector((state)=>state.tokenReducer)
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if(tokenData.token === ''){
            dispatch(setToken({token: getCookie('token')?.toString() ?? '' , role: tokenData.role ?? '' }));
        }

        console.log(tokenData.token,getCookie('token'));
        const date = new Date();
        axios.post('http://localhost:3001/records', {
        userId: parseInt(formData.get('user')?.toString() ?? '0' ),
        siteId: parseInt(formData.get('site')?.toString() ?? '0'),
        advancePayment: parseInt(formData.get('advancement')?.toString() ?? '0'),
        remarks: formData.get('remarks'),
        currentDate: date.toISOString()
    },{
        headers: {
            Authorization: `Bearer ${tokenData.token}`
        }
    }).then((res)=>{
      router.push('/recordData');
      console.log(res);
    })

}
return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Create Site</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <label htmlFor="user" className="block text-gray-600 text-sm font-semibold mb-2">
            User
          </label>
          <input
            type="number"
            id="user"
            name="user"
            className="w-full border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
            placeholder="Enter the user"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="site" className="block text-gray-600 text-sm font-semibold mb-2">
            Site
          </label>
          <input
            type="number"
            id="site"
            name="site"
            className="w-full border border-pink-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
            placeholder="Enter the site name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="advancement" className="block text-gray-600 text-sm font-semibold mb-2">
            Advancement
          </label>
          <input
            type="number"
            id="advancement"
            name="advancement"
            className="w-full border border-red-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
            placeholder="Enter the advancement"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="remarks" className="block text-gray-600 text-sm font-semibold mb-2">
            Remarks
          </label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            className="w-full border border-yellow-300 rounded-md py-2 px-3 focus:outline-none focus:border-yellow-500"
            placeholder="Enter remarks"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 text-sm font-semibold mb-2">
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            className="w-full border border-green-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
            placeholder="Enter the date"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400"
        >
          Create Record
        </button>
      </form>
    </div>
  </div>
);

}