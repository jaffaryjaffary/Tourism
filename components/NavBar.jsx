'use client'
import Image from 'next/image'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { usePathname, useRouter } from 'next/navigation';
const menu=[
    {
        label: 'Home',
        path: '/Home',
        icon: <IoHome />
    },
    {
        label: 'Services',
        path: '/Accomodation',
        icon:<FaServicestack />
    },
    {
        label: 'Destinations',
        path: '/Destination',
        icon:<FaHandPointRight />
    },
     {
        label: 'About Us',
        path: '/About',
        icon:<MdPeopleAlt />
    },
    {
        label: 'Contact',
        path: '/Contact',
        icon:<FaPhoneAlt />
    },
     {
        label: 'Admin Login',
        path: '/Login',
        icon:<IoMdLogIn />
    },

]
export default function NavBarpage(){
    const [openToogle, setOpenToogle] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    return(

<div>

 <div className="flex items-center fixed justify-between   bg-white  w-full shadow-lg">
    <div className='p-4'>
        <Image src={'/images/picture36.jpeg'} alt='' width={50} height={50}  className="rounded-2xl"/>
     </div>
            <div>

            <div className='hidden md:flex lg:flex'>

                 {menu.map(item =>
                    <ul key={item.label} className='m-5'>
                        <li className='flex items-center gap-2'
                        
                    ><span>{item.icon}</span><Link href={item.path}
                     className={`px-4 py-2 rounded-2xl ${
            pathname === item.path
              ? "bg-blue-500 text-white"
              : ""
          }`}
                    
                    >{item.label}</Link></li>
                    </ul>
                 )}  
                
            </div>
            
            <div className='p-4 md:hidden lg:hidden'>
                {openToogle   ? 
                <IoMdClose size={24} className='cursor-pointer' onClick={()=>setOpenToogle(false)}/>
                :
               
                 <IoMenuSharp  size={24} className='cursor-pointer' onClick={()=>setOpenToogle(true)} />
}
            
            </div>
           
            

            </div>

               
               <button onClick={()=> router.push('/Contact')}
               className='hidden lg:flex m-5 bg-amber-500 p-2 rounded-2xl text-white font-semibold cursor-pointer  gap-2 items-center 
               hover:bg-amber-700'>
                <FaCrown />
                Get YourBooking</button>
           
        </div>
        
       

        {openToogle && (

             <div className='fixed bottom-0 left-0 right-0  w-full top-15 bg-white h-90 border-t border-gray-400 shadow-lg  lg:hidden'>

             {menu.map(item =>
                    <ul key={item.label} className='m-5'>
                         <li className='flex items-center gap-2'><span>{item.icon}</span><Link href={item.path}
                           className={`px-4 py-2 rounded-2xl ${
            pathname === item.path
              ? "bg-blue-500 text-white"
              : ""
          }`}
                         >{item.label}</Link></li>

                         
                
                    </ul>
                 )}  


        </div>
            
        )}
       
     </div>
    )
}