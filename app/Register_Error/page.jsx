import Link from "next/link";


export  async function RegisterError({searchParams}){
    const params = await searchParams;
    const hasError = params?.error;
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col">     
                <div className="p-4 bg-red-100 rounded-lg">
                    {hasError === '2' && <p className="text-red-500 text-xl font-bold">Email already exists. Please use a different email.</p>}
                </div>
                <Link href="/Add_User" className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                    Go to Registration Page
                </Link>
                   <Link href="/12345" className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                    Go to Profile
                </Link>
            </div>
        </div>
    )
}