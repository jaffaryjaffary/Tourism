'use client'

import { useRouter } from "next/navigation"

export default function BookingSuccess(){
    const router = useRouter()
    return(
        <div className="h-screen w-full flex items-center justify-center">
            <div className="bg-green-100 p-10 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-green-700 mb-4">Booking Successful!</h1>
                <p className="text-green-600">Thank you for your booking. We look forward to welcoming you!</p>
                <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-bold py-2 px-4 rounded" 
                onClick={() => router.push('/Home')}>
                    Back to Home
                </button>
            </div>
        </div>
    )
}