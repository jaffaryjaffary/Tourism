import Image from "next/image";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { BsEnvelopeAt } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import Link from "next/link";


export default function Footer(){
    return(
        <div className="mt-5">
            <div className="bg-black">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3"> 
                <div className="mt-10 px-20">
                    <Image src={'/images/picture36.jpeg'} alt="" width={100} height={90}/>
                    <p className="text-gray-500">Creating unforgettable African safari adventures and lasting memories.</p>
                </div>

                <div className="mt-10 px-20">
                    <h1 className=" text-white text-xl">Quick Links</h1>
                    <ul className="mt-3  list-none">
                         <li className=" text-gray-500"><Link href={'/'}>Home</Link></li>
                     <li className=" text-gray-500 mt-3"><Link href={'/Accomodation'}>Services</Link></li>
                      <li className=" text-gray-500 mt-3"><Link href={'/Destination'}>Destinations</Link></li>
                      <li className=" text-gray-500 mt-3"><Link href={'/About'}>About Us</Link></li>
                     <li className=" text-gray-500 mt-3"><Link href={'/Contact'}>Contact Us</Link></li>
                    </ul>
                   
                </div>
                <div className="mt-10 px-20">
                    <h1 className=" text-white text-xl">Social Platform</h1>

                      <ul className="mt-3  list-none">
                    <li className=" text-gray-500 flex items-center gap-2"><span><SiFacebook color="blue " size={20} /></span>Facebook.com</li>
                     <li className=" text-gray-500 flex items-center gap-2 mt-3"><span><FaInstagram color="red" size={20}/></span>Instagram.com</li>
                     <li className=" text-gray-500 mt-3 flex items-center gap-2"><span><AiOutlineGlobal size={20} color="white"/></span>www.Safaribookings.com</li>
                      <li className=" text-gray-500 mt-3 flex items-center gap-2"><span><AiOutlineGlobal size={20} color="white"/></span>www.TripAdvisor.com.com</li>
                       <li className=" text-gray-500 mt-3  flex items-center gap-2"><span><AiOutlineGlobal size={20} color="white"/></span>www.Safarigo.com</li>
                        <li className=" text-gray-500 mt-3 flex items-center gap-2"><span><AiOutlineGlobal size={20} color="white"/></span>www.Safarisource</li>
                         <li className=" text-gray-500 flex items-center gap-2 mt-3"><span><AiOutlineGlobal size={20} color="white"/></span>www.smilinghoursafricanadventure.com</li>
                          <li className=" text-gray-500 flex items-center gap-2 mt-3"><span><BsEnvelopeAt size={20} color="white" /></span>info@smilinghoursadventures.com</li>
                    </ul>
                   
                </div>

                </div>

              <div className="flex-col lg:px-20 border-t border-gray-400 mt-5 flex items-center justify-between m-10 p-4">
                <p className="text-gray-500 mt-5">@2026 Smiling Hours African Adventures. All rights reserved.</p>
                <div className="flex items-center justify-center gap-3">
                    <h1 className="text-gray-500 mt-5">Privacy Policy</h1>
                    <h1 className="text-gray-500 mt-5">Terms of Service</h1>
                </div>
              </div>
            </div>
        </div>
    )
}