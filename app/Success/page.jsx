import Link from "next/link";

export default async function RegesterSuccess({searchParams}){
    const params = await searchParams;
    const hasSuccess = params?.success;
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col">
                <div className="p-4 bg-green-100 rounded-lg"> 
                    {hasSuccess === '1' && <p className="text-green-500 text-xl font-bold">User registered successfully!</p>}
                </div>
                <Link href="/Add_User" className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                    Go to Add User Page
                </Link>
            </div>
        </div>
    )
}