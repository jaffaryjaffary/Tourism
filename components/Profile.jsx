'use client'
import { CgProfile } from "react-icons/cg";
import { DeleteApproveVisitorAction } from "../app/Actions";
import { redirect } from "next/navigation";
export default function Profile({ProfileInfo, FetchApproveVisitorById}){

    async function HandleDelete(currentId) {

        await DeleteApproveVisitorAction(currentId,'/1234567')
        redirect('/Approved_Visitor')
        
    }
    return(
        <div className="flex items-center justify-between p-4">
          <div className=" h-screen w-[20%]  hidden lg:flex">
            <div>
                <h1 className="text-2xl font-bold"> User Details</h1>
              <p className="text-sm text-gray-400">Manage Profile</p>
              <div className="mt-10 bg-gray-300 p-2 rounded-2xl">
                      <span className="flex items-center gap-2"><CgProfile size={35} color=""/><h1 className="">Profile</h1></span>
                      
              </div>
                 <h1 className="font-bold mt-5">Approved By : {FetchApproveVisitorById?.approvedByFname} {FetchApproveVisitorById?.approvedBylname}</h1>
                 <p className="text-sm text-gray-500"> {new Date(FetchApproveVisitorById?.createdAt).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}</p>
            </div>
          </div>
          <div  className=" h-screen w-[80%] px-10">
            <div className="border-b border-gray-400 p-4 lg:flex items-center justify-between"> 
               <h1 className="text-2xl font-bold">Profile Details</h1>
               {ProfileInfo?.userInfo?.role === 'Admin' &&(
                <button onClick={()=> HandleDelete(FetchApproveVisitorById?._id)} 
               className="bg-red-400 p-2 text-white font-bold cursor-pointer ">Remove Visitor</button>

               )}
               
               <h1 className="font-bold mt-5 lg:hidden">Approved By : {FetchApproveVisitorById?.approvedByFname} {FetchApproveVisitorById?.approvedBylname}</h1>
                 <p className="text-sm text-gray-500 lg:hidden"> {new Date(FetchApproveVisitorById?.createdAt).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}</p>
            </div>
            <div className="mt-8 border-b border-gray-400 lg:flex items-center justify-between p-2">
                <h1 className="font-semibold">Profile</h1>
                <span className="flex items-center gap-2"><CgProfile size={35} color=""/>
                <h1 className="font-semibold">{FetchApproveVisitorById?.fname} {FetchApproveVisitorById?.lname}</h1></span>
                <p className="font-semibold text-green-400">Approved</p>
            </div>
            <div className="mt-8 border-b border-gray-400 lg:flex items-center justify-between p-2">
                <h1 className="font-semibold">Email</h1>
                <span className="flex items-center gap-2">
                <h1 className="font-semibold">{FetchApproveVisitorById?.email}</h1></span>
               
            </div>
            <div className="mt-8 border-b border-gray-400 lg:flex items-center justify-between p-2">
                <h1 className="font-semibold">Phone_Number</h1>
                <span className="flex items-center gap-2">
                <h1 className="font-semibold">{FetchApproveVisitorById?.phone}</h1></span>
               
            </div>
            
             <div className="mt-8 border-b border-gray-400 lg:flex items-center justify-between p-2">
                <h1 className="font-semibold">Visit-Date</h1>
                <span className="flex items-center gap-2">
                <h1 className="font-semibold">{FetchApproveVisitorById?.visitDate}</h1></span>
               
            </div>
            
             <div className="mt-8 border-b border-gray-400 lg:flex items-center justify-between p-2">
                <h1 className="font-semibold">Travellars</h1>
                <span className="flex items-center gap-2">
                <h1 className="font-semibold">{FetchApproveVisitorById?.travellars}</h1></span>
               
            </div>
            <div className="mt-8 border-b border-gray-400 lg:flex items-center justify-between p-2">
                <h1 className="font-semibold">Destination</h1>
                <span className="flex items-center gap-2">
                <h1 className="font-semibold">{FetchApproveVisitorById?.destination}</h1></span>
               
            </div>
             <div className="mt-8 border-b border-gray-400 lg:flex items-center justify-between p-2">
                <h1 className="font-semibold">Gender</h1>
                <span className="flex items-center gap-2">
                <h1 className="font-semibold">{FetchApproveVisitorById?.gender}</h1></span>
               
            </div>
           
            
          </div>
        </div>
        
    )
}