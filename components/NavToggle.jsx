import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
 import { FaUserPlus } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import Link from "next/link";

export default function NavToggle({ sessionUser }){
    const menu =[
    {
         id:1,
        label: 'Home',
        path: '/Admin_Dashboard',
        icon: <IoHome />
    },
        {     id:2,
            label: 'Contact Visitors',
            path: '/Contact_Visitor',
          
              icon: <FaPhone />
        },
          {     id:3,
            label: 'Add Visitor',
            path: '/Add_Visitor',
               icon: <FaPlus />
        },
         {   
             id:4, 
            label: 'Added User',
            path: '/12345',
            icon: <FaUserPlus />,
            
        },
    
        {     id:5,
            label: 'Approved Visitor',
            path: '/Approved_Visitor',
            icon: <MdVerified />
        },

        {         id:6,
                label: 'Upload Destination',
                path: '/12345UploadImg',
                icon: <IoCloudUploadOutline />
            },
   
]
    return(
        <div className="bg-white   shadow-lg p-4 w-full border-t border-gray-200 lg:hidden">
            <div>
                {menu.map(item => 
                    <ul key={item.id} className="p-2">
                
                           <li className="flex items-center gap-2"><span>{item.icon}</span><Link href={item.path}>{item.label}</Link></li>
                    </ul>
                )}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-3 text-xs">
                <span>{sessionUser?.email || sessionUser?.username}</span>
                <Link className="font-semibold text-[color:var(--accent-dark)]" href="/logout">
                  Logout
                </Link>
            </div>
        </div>
    )
}
