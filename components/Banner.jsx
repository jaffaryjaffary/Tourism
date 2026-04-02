// import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import Adventure from '../components/Adventure'

export default function Banner(){
    return(
    <div className="">
    <div className="flex items-center justify-center">
            {/* <div className="flex flex-col">
                <h1 className="text-4xl font-semibold text-center">Our Destinations</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-5">
                    <div className="p-4 ">
                        <Image src={'/images/picture15.jpeg'} alt="" width={500} height={300} className=""/>
                        <div className="p-4 bg-white shadow-lg">
                            <p className="text-yellow-600 text-xl">Serengeti · Ngorongoro · Tarangire</p>
                            <h1 className="font-bold text-2xl">TANZANIA</h1>
                            <button  className="bg-amber-400 p-3 text-white text-center rounded-2xl cursor-pointer mt-5">ORDER NOW</button>
                        </div>
                    </div>

                    <div className="p-4">
                        <Image src={'/images/picture32.jpeg'} alt="" width={500} height={300} className=""/>
                         <div className="p-4 bg-white shadow-lg">
                            <p className="text-yellow-600 text-xl">Serengeti · Ngorongoro · Tarangire</p>
                            <h1 className="font-bold text-2xl">TANZANIA</h1>
                             <button  className="bg-amber-400 p-3 text-white text-center rounded-2xl cursor-pointer mt-5">ORDER NOW</button>
                        </div>
                        
                    </div>
                    <div className="p-4">
                        <Image src={'/images/picture4.jpeg'} alt="" width={500} height={300} />
                         <div className="p-4 bg-white shadow-lg">
                            <p className="text-yellow-600 text-xl">Serengeti · Ngorongoro · Tarangire</p>
                            <h1 className="font-bold text-2xl">TANZANIA</h1>
                             <button  className="bg-amber-400 p-3 text-white text-center rounded-2xl cursor-pointer mt-5">ORDER NOW</button>
                        </div>
                        
                    </div>

                     <div className="p-4">
                        <Image src={'/images/picture16.jpeg'} alt="" width={500} height={300} />
                         <div className="p-4 bg-white shadow-lg">
                            <p className="text-yellow-600 text-xl">Serengeti · Ngorongoro · Tarangire</p>
                            <h1 className="font-bold text-2xl">TANZANIA</h1>
                             <button  className="bg-amber-400 p-3 text-white text-center rounded-2xl cursor-pointer mt-5">ORDER NOW</button>
                        </div>
                        
                    </div>
                     <div className="p-4">
                        <Image src={'/images/picture17.jpeg'} alt="" width={500} height={300} />
                         <div className="p-4 bg-white shadow-lg">
                            <p className="text-yellow-600 text-xl">Serengeti · Ngorongoro · Tarangire</p>
                            <h1 className="font-bold text-2xl">TANZANIA</h1>
                             <button  className="bg-amber-400 p-3 text-white text-center rounded-2xl cursor-pointer mt-5">ORDER NOW</button>
                        </div>
                        
                    </div>
                     <div className="p-4">
                        <Image src={'/images/picture14.jpeg'} alt="" width={500} height={300} />
                         <div className="p-4 bg-white shadow-lg">
                            <p className="text-yellow-600 text-xl">Serengeti · Ngorongoro · Tarangire</p>
                            <h1 className="font-bold text-2xl">TANZANIA</h1>
                             <button  className="bg-amber-400 p-3 text-white text-center rounded-2xl cursor-pointer mt-5">ORDER NOW</button>
                        </div>
                        
                    </div>
                     
                </div>
             </div> */}

             

        </div>

            
                

        

        <div className="flex items-center justify-center mt-10">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-center">Why Choose Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    <div className="bg-white shadow-lg w-90 p-4">
                         <CiCircleCheck  size={60} className="text-yellow-600"/>
                         <div>
                            <h1 className="font-bold text-xl mt-5">Curated Adventures</h1>
                            <div className="mt-5">

                            <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Hand-picked destinations worldwide</p></span>
                            <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Expert local guides</p></span>
                             <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Unique experiences off the beaten path</p></span>

                            </div>
                           
                         </div>
                    </div>

                     <div className="bg-white shadow-lg w-90 p-4">
                         <IoShieldOutline  size={60} className="text-yellow-600"/>
                         <div>
                            <h1 className="font-bold text-xl mt-5">Risk-Free Guarantee</h1>
                            <div className="mt-5">

                            <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Full refund if trip is canceled</p></span>
                            <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Comprehensive travel insurance</p></span>
                             <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">24/7 emergency support</p></span>

                            </div>
                           
                         </div>
                    </div>

                     <div className="bg-white shadow-lg w-90 p-4">
                         <SlPeople  size={60} className="text-yellow-600"/>
                         <div>
                            <h1 className="font-bold text-xl mt-5">Community First</h1>
                            <div className="mt-5">

                            <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Small group sizes for personalized attention
</p></span>
                            <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Connect with like-minded travelers</p></span>
                             <span className="flex items-center gap-3 mt-3"><FaRegStar size={30} className="text-yellow-600"/>
                            <p className="text-gray-400">Lifetime membership benefits</p></span>

                            </div>
                           
                         </div>
                    </div>
                    
                
                
                </div>

            </div>
            
        </div>

        <Adventure/>

        </div>
    )
}