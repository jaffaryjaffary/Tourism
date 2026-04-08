import Link from "next/link";

export default function UploadSuccessPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <div className="p-4 bg-green-100 rounded-lg">
          <p className="text-green-500 text-xl font-bold">Image uploaded successfully!</p>
        </div>
        <Link href="/Admin_Dashboard" className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}
