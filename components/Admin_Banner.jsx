import { FaLocationDot } from "react-icons/fa6";
export default function Admin_Banner(){
    return(
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="mt-5">
                <h1 className="text-xl font-semibold">Get Started With Smiling Hours</h1>

               <p className="border p-4 text-gray-400 mt-5 border-t-4 border-gray-400">Founded by passionate travelers in 2018, Smiling Hours African Adventures was born from a simple belief: safari travel should be transformative, accessible, and filled with genuine joy and authentic African experiences.

                We have spent years building relationships with local 
               communities across Africa, discovering hidden wildlife treasures,
                and perfecting the art of crafting meaningful safari adventures. Our approach 
               combines meticulous planning with spontaneous discovery, creating the perfect balance for unforgettable African journeys.

               Every safari trip we design reflects our commitment to authentic
               experiences, sustainable travel, and the connections that make life rich. 
                 We are not just tour operators—we are your partners in exploration.</p>  
            </div>

            <div className="mt-17 bg-white shadow-lg">
                <div className="bg-green-300 p-4">
                     <h1 className="text-xl font-semibold">Available Destination</h1>
                </div>

                <span className="flex items-center gap-3 mb-3"><FaLocationDot  size={20} color="red"/><p>Serengeti</p></span>
                 <span className="flex items-center gap-3 mb-3"><FaLocationDot size={20} color="red"/><p>Mikumi</p> </span>
                  <span className="flex items-center gap-3 mb-3"><FaLocationDot size={20} color="red"/><p>Kilimanjaro</p></span>
                   <span className="flex items-center gap-3 mb-3"><FaLocationDot size={20} color="red"/><p>Ngorongoro</p></span>
                    <span className="flex items-center gap-3 mb-3"><FaLocationDot size={20} color="red"/><p>Tarangire</p></span>
                     <span className="flex items-center gap-3 mb-3"><FaLocationDot size={20} color="red"/><p>Zanzibar</p></span>
                
            </div>

            
            </div>
            
        </div>
    )
}