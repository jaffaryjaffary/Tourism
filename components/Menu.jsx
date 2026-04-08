'use client'
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
 import { FaUserPlus } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdHelp } from "react-icons/io";
export default function MenuPage(){
const pathname = usePathname();

  
    

    const menu =[

   
    {
        label: 'Home',
        path: '/Admin_Dashboard',
        icon: <IoHome />
    },

    {
        label: 'Contact Visitors',
        path: '/Contact_Visitor',
        icon: <FaPhone />
    },
     
     {
        label: 'Add Visitors',
        path: '/Add_Visitor',
        icon: <FaPlus />
    },

   
     {
        label: 'added User',
        path: '/12345',
        icon: <FaUserPlus />,     
        
        
    },
    


     

    {
        label: 'Approved',
        path: '/Approved_Visitor',
        icon: <MdVerified />
    },
     {
        label: 'Upload Destination',
        path: '/12345UploadImg',
        icon: <IoCloudUploadOutline />
    },
     {
        label: 'Help & Support',
        path: '/Help&Support',
        icon: <IoMdHelp />
    },
]

    return(
        <div className="p-4 text-white">
            <div className="flex items-center gap-3">
                <Image src={'/images/picture36.jpeg'} alt="" width={48} height={48} className="rounded-2xl"/>
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">Smiling Hours</p>
                  <p className="text-lg font-semibold">Admin Panel</p>
                </div>
            </div>

            <div>
                {menu.map(item => 
                    <ul key={item.label} className="mt-4">
                           
                          
                            <li className='flex items-center gap-3 text-white'><span
                            
                           >
                            {item.icon}</span><Link href={item.path}
                               className={`w-full rounded-2xl px-3 py-2 transition ${
            pathname === item.path
              ? "bg-white/10 text-white"
              : "text-white/80 hover:text-white"
          }`}
                            >{item.label}</Link></li>
                    

                           
                        
                           
                       
                    </ul>
                )}
            </div>
        </div>
    )
}
