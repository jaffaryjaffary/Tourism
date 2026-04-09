import Link from "next/link";


export default function UploadSuccessPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col bg-green-300 p-8 rounded-lg shadow-md">
        <div className="p-4 bg-green-100 rounded-lg">
          <p className="text-green-500 text-xl font-bold">Destination uploaded successfully!</p>
        </div>
        <Link href="/Admin_Dashboard" className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md text-center hover:bg-green-700">
          Go to Home Page
        </Link>
      </div>
          </div>
  )
}
