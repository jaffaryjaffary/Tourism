'use client'
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
// import { FaUserPlus } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { usePathname } from "next/navigation";
export default function Menu(){
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

   
    //  {
    //     label: 'Add User',
    //     path: '/Add_User',
    //     icon: <FaUserPlus />,     
        
        
    // },
    


     

    {
        label: 'Approved',
        path: '/Approved_Visitor',
        icon: <MdVerified />
    },
]

    return(
        <div className="p-2">
            <div>
                <Image src={'/images/picture36.jpeg'} alt="" width={50} height={50} className="rounded-2xl"/>
            </div>

            <div>
                {menu.map(item => 
                    <ul key={item.label} className="p-2 mt-5">
                           
                          
                            <li className='flex items-center gap-2 text-white'><span
                            
                           >
                            {item.icon}</span><Link href={item.path}
                               className={`p-2 rounded-2xl ${
            pathname === item.path
              ? "bg-gray-400 text-white"
              : ""
          }`}
                            >{item.label}</Link></li>
                    

                           
                        
                           
                       
                    </ul>
                )}
            </div>
        </div>
    )
}