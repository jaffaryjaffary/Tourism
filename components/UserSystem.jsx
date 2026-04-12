"use client";
import { RxEyeOpen } from "react-icons/rx";
// import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect, useTransition } from "react"
 import { FaPlus } from "react-icons/fa";;
import {SearchCreateUserSystem} from "../app/Actions";
import { useRouter } from "next/navigation";



export default function LiveSearchTablePaginationPages({ProfileInfo}) {
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPending, startTransition] = useTransition();
  
   const router = useRouter()


  useEffect(() => {
    startTransition(async () => {
      const data = await SearchCreateUserSystem(keyword, page);
      setUsers(data.users);
      setTotalPages(data.totalPages);
    });
  }, [keyword, page]);

  const handleSearch = (value) => {
    setKeyword(value);
    setPage(1); // reset to first page when typing
  };

  async function HandleUserDetails(getCurrentId) {
    
   router.push(`/123456789/${getCurrentId}`)

     

  
  }
 
  // async function HandleDelete(currentId) {
  //   await DeleteApproveVisitorAction(currentId,'/Approved_Visitor')
    
  // }
   
  return (
    <div className="overflow-auto bg-white shadow-lg p-3">

        <div className="lg:flex justify-between items-center p-4">

            <h2 className="text-xl font-bold">System User Management</h2>
       <div>
                  <input
        type="text"
        placeholder="Search by firstname..."
        value={keyword}
        onChange={(e) => handleSearch(e.target.value)}
        className="border p-3 w-80"
      />

      {isPending && <p>Searching...</p>}
       </div>
      

        </div>
      

      <table className="w-full mt-2 ">
        <thead className="bg-gray-300">
          <tr>
           <th className="p-2">S/N</th>
            <th >FirstName</th>
            <th>LastName</th>
             <th>Email</th>
              <th>Role</th>
             <th>Gender</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td className="text-center text-2xl" colSpan='10'>
                No data found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user._id} className="border-b border-gray-400 mb-5 text-center">
                <td className="p-2">{(page - 1) * 5 + index + 1}</td>
            
                  <td>{user?.fname}</td>
              
              <td>{user?.lname}</td>
              <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>{user?.gender}</td>
               
                
                  <td className="">
                                      <button><RxEyeOpen  
                                      color="green" size={20} className="cursor-pointer" 
                                      onClick={()=>HandleUserDetails(user?._id)}/></button>
                                       {/* <button><FaTrashAlt onClick={()=> HandleDelete(user._id)} color="red" size={20} className="cursor-pointer ml-2"/></button> */}
                                     </td>
                  
                
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center mt-2">
        <button  className="bg-blue-400 p-2 rounded-2xl text-white cursor-pointer"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{ marginRight: "10px" }}
        >
          Previous
        </button>

        <span> Page {page} of {totalPages} </span>

        <button  className="bg-blue-400 p-2 rounded-2xl text-white cursor-pointer"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>

      </div>

       {ProfileInfo?.role === 'Admin' &&(
          <div className="flex items-center justify-center">
            <button onClick={()=> router.push('/Add_User')}
            className="bg-gray-400 p-4 cursor-pointer rounded-2xl"><FaPlus  size={25} color="white"/></button>
        </div>
       )}
        

      
       

    </div>
  );
}