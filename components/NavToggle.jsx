import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
// import { FaUserPlus } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavToggle(){
    const menu =[
    {
         id:1,
        label: 'Home',
        path: '/Admin_Dashboard',
        icon: <IoHome />
    },
        {     id:2,
            label: 'Add Visitor',
            path: '/Add_Visitor',
            icon: <FaPlus />
        },
        //  {   
        //      id:3, 
        //     label: 'Add User',
        //     path: '/Add_User',
        //     icon: <FaUserPlus />,
            
        // },
    
        {     id:4,
            label: 'Approved Visitor',
            path: '/Approved_Visitor',
            icon: <MdVerified />
        },
   
]
    return(
        <div className="bg-white fixed shadow-lg p-4 w-full border-t border-gray-400 lg:hidden">
            <div>
                {menu.map(item => 
                    <ul key={item.id} className="p-2">
                
                           <li className="flex items-center gap-2"><span>{item.icon}</span><Link href={item.path}>{item.label}</Link></li>
                    </ul>
                )}
            </div>
            <UserButton/>,
        </div>
    )
}