'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import Footer from "./Footer";

export default function DestinationPage({FetchDestination =[]}){
    const router = useRouter()
     const images = [
        "/images/picture37.jpeg",
        "/images/picture38.jpeg",
        
      
      ];
    
      const [current, setCurrent] = useState(0);

       useEffect(() => {
          const slide = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
          }, 3000);
      
          return () => clearInterval(slide);
        }, [images.length]);
    return(
    <div className='h-screen pt-0'>
        <div style={{
            width:'100%',
            height: '100%',
            backgroundImage: "url('/images/picture39.jpeg')",
            backgroundPosition:'center',
            backgroundSize: 'cover'
        }}>

        </div>

        
        <div className="flex items-center justify-center mt-10 bg-black">

            <div className="flex flex-col">
                <h1 className="text-4xl font-serif text-center text-white">Explore Our Destinations</h1>
                <p className="text-center text-xl text-white font-serif">Discover the world with us! From tropical 
                    paradises to cultural hubs, our destinations offer unforgettable experiences. Whether
                     you are seeking adventure, relaxation, or cultural immersion, we have the perfect getaway for you. 
                     Start your journey today and create memories that will last a lifetime.</p>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-4">
                            {FetchDestination && FetchDestination.length > 0 ? (
                                FetchDestination.map(item => (
                                    <div key={item?._id} className=" rounded-lg text-white shadow-md p-4 
                                    cursor-pointer">
                                        <Image
                                            src={item?.imageUrl || "/fallback.jpg"} // ✅ FIX
                                            alt={item?.name || "destination"}
                                            width={700}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                        <h2 className="text-2xl font-bold mt-2">{item.name}</h2>
                                
                                        <p className="text-gray-300">{item?.description}</p>

                                       <div className="">
                                             <button onClick={()=> router.push('/Contact')}
                                             className="bg-amber-400 text-white font-bold cursor-pointer p-3 
                                             rounded-2xl mt-2 text-xl hover:bg-amber-600">Get started</button>
                           
                        </div>
                                        
                        
                                    </div>

                                    
                                ))
                            ) : (
                                <div className="flex items-center justify-center mt-10 ">
                                <p className="text-center text-xl text-white">No destinations available at the moment.</p>
                                </div>
                            )}
                               
                                
                     </div>

                   
             </div>

       
        </div>
                              <div className="flex items-center justify-center gap-5 mt-8 p-4">

                    <div className="flex flex-col">
                        <h1 className="text-4xl font-serif text-center">Get About With Our Destinations</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">

                            <div className="bg-white shadow-lg">
                                <div className="bg-green-300 p-2">
                                    <h1 className="text-xl font-serif text-center">ROUTE</h1>
                                </div>
                                <p className="p-2 font-serif"><span className="font-bold">1.Lemosho Route:</span> 
                               most Widely regarded as  <br/>
                                the scenic route,starting on the western slope. It<br/>
                                offers high success rates due to its longer<br/>
                                <span className="font-bold"> 2:Machame Route(Whiskey Route):</span>
                                 One of<br/>
                                 the most popular routes,known for it scenic<br/>
                                 diversity. It approaches from the south,<br/>
                                 offering good acclimatization but higher<br/>
                                 crows(6-7 days)<br/>
                                 <span className="font-bold"> 3:Marangu Route(Coca-Cola Route):</span>The <br/>
                                 oldest and most budget-friendly route.it is<br/>
                                 the only route with hut accomodation rather<br/>
                                 than tents, but has lower success rate due<br/>
                                 to it faster 5-6 day itinery.<br/>
                                 <span className="font-bold"> 4:Rongai Route:</span>
                                 The only route to approach<br/>
                                 from the north(near the kenyan border),<br/>
                                 making it quieter and drier during the rainy<br/>
                                 season(6-7 days)<br/>
                                  <span className="font-bold"> 5:Northern Circuit Route:</span>
                                  The newest and<br/>longest route, circling the northern slope.<br/>
                                  It has the highest success rate(90%+) and<br/>
                                  best acclimatization, ideal for a 9-10 day trip
                                </p>
                            </div>
                             <div className="bg-white shadow-lg">
                                <div className="bg-green-300 p-2">
                                    <h1 className="text-xl font-serif text-center">Start With a Vision</h1>
                                </div>
                                <p className="p-2 font-serif text-center">
                                    Tell us your ideal safari, how many<br/>
                                    days, where you want to go, what level<br/>
                                    of comfort you prefer, who is coming<br/>
                                    along, and what experiences excite you<br/>
                                    most. Prefer a ready-made itinery?<br/>
                                    Choose one from our collection as is,<br/>
                                    or use it as starting point to <br/>
                                    customize your journey
                              
                                </p>
                            </div>
                             <div className="bg-white shadow-lg">
                                <div className="bg-green-300 p-2">
                                    <h1 className="text-xl font-serif text-center">Seamless Execution</h1>
                                </div>
                                <p className="p-2 font-serif text-center">
                                    Once your itinery is set, we will guide<br/>
                                     you through everything you need to<br/>
                                    know: packing tips, travel logistics, and<br/>
                                    what to expect. And from the moment<br/>
                                    you land to your final farewell, our <br/>
                                    team is with you every step of the way,<br/>
                                    ensuring your safari is smooth, safe,<br/>
                                    and spectacular
                              
                                </p>
                            </div>

                        </div>
                    </div>
                        
                </div>

                    <div className="flex items-center justify-center mt-10">
                        <div className="flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <div>
                                   <Image src={'/images/picture50.jpeg'} alt="" width={400} height={600}/> 
                                   <div className="bg-amber-600 p-4">
                                     <h1 className="text-center font-bold  text-white">Why in Tanzania?</h1>
                                     <p className=" text-white font-serif">Tanzania is home to some Africans most Ionic<br/> destination 
                                      including the Serengeti National<br/>
                                       Park, Mount Kilimanjaro, and the Zanzibar<br/> Archipelago.
                                       With over 30% of it is land<br/> dedicated to conservation,
                                         Tanzania offers<br/> some of the best wildlife viewing<br/> opportunities in the World.
                                      </p>
                                       <ul className="mt-6">
                                                                    <li className="flex items-center gap-2 text-white font-serif">
                                                                      <IoMdCheckmark size={30} color="orange"/> World is Largest Mammal Migration</li>
                                                                       <li className="flex items-center gap-2 text-white font-serif">
                                                                      <IoMdCheckmark size={30} color="orange"/>African is Highest Mountain</li>
                                                                       <li className="flex items-center gap-2 text-white font-serif">
                                                                      <IoMdCheckmark size={30} color="orange"/>Pristine Indian Ocean Beaches</li>
                                                                       <li className="flex items-center gap-2 text-white font-serif">
                                                                      <IoMdCheckmark size={30} color="orange"/>UNESCO World Heritage Sites</li>
                                                                       <li className="flex items-center gap-2 text-white font-serif">
                                                                      <IoMdCheckmark size={30} color="orange"/>Rich Cultural Diversity</li>
                                                                       <li className="flex items-center gap-2 text-white font-serif">
                                                                      <IoMdCheckmark size={30} color="orange"/>Year-Round Wildlife Viewing</li>
                                                                   </ul>
                                   </div>

                                   
                                </div>

                                 <div>
                                   <Image src={'/images/picture48.jpeg'} alt="" width={400} height={600}/> 
                                   <div className="bg-amber-600 p-4">
                                     <h1 className="text-center font-bold  text-white">4 Days in flyTanzania Adventure </h1>
                                     <p className=" text-white font-serif">Tanzania is home to some Africans most Ionic<br/> destination 
                                       Enjoy a 4 days in Tanzania Safari<br/> exploring Central Serengeti with luxury stays<br/> and Big Five Game drives.
                                      </p>
                                       
                                   </div>

                                   
                                </div>

                                 <div>
                                   <Image src={'/images/picture45.jpeg'} alt="" width={400} height={600}/> 
                                   <div className="bg-amber-600 p-4">
                                     
                                     <p className=" text-white font-serif">
                                      8- 10 Days Smiling hours Wildebeest Migration<br/>
                                       Luxury Safari.Expirence Tarangire National<br/>
                                       park,Ngorongoro Crater,Serengeti Southern <br/>and Northern. 
                                      </p>
                                       
                                   </div>

                                   
                                </div>

                                 <div>
                                   <Image src={'/images/picture49.jpeg'} alt="" width={400} height={600}/> 
                                   <div className="bg-amber-600 p-4">
                                     
                                     <p className=" text-white font-serif">
                                        3 Days Tanzania Elefants Safari exploring Tarangire<br/>
                                        and Ngorongoro  Crater with Big five wildlife<br/> experiences.
                                      </p>
                                       
                                   </div>

                                   
                                </div>
                                   

                                

                                  <div>
                                   <Image src={'/images/picture46.jpeg'} alt="" width={400} height={600}/> 
                                   <div className="bg-amber-600 p-4">
                                     
                                     <p className=" text-white font-serif">
                                        5 days Tanzania Safari. Enjoy Ngorongoro Crater<br/> Safari
                                          and exploring Southern Serengeti plains<br/>for Predators actions.
                                      </p>
                                       
                                   </div>

                                   
                                </div>

                                 <div>
                                   <Image src={'/images/picture47.jpeg'} alt="" width={400} height={600}/> 
                                   <div className="bg-amber-600 p-4">
                                      <h1 className="text-center font-bold  text-white">6 Days Tanzania in style Wildlife Safari.</h1>
                                     <p className=" text-white font-serif">
                                        Discover  Northern Tanzania on a 6 day safari<br/>
                                         Visiting Tarangire, Serengeti, Ngorongoro Crater, <br/>Lake eyas( Bushmens)
                                      </p>
                                       
                                   </div>

                                   
                                </div>

                          
                               
                               

                            </div>
                        </div>
                    </div>
                 <div className="flex items-center justify-center gap-5 mt-5">
                                    <div className="flex flex-col">
                                        <h1 className="text-4xl font-serif text-center">Our Means Of Transportation</h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                            <div className="mt-5 p-4">
                                                 <div className="">
                                                   <Image src={images[current]} alt="" width={600} height={300}   className="rounded-lg"/> 
                                                 </div>
                                            </div>
                                            <div className="bg-white shadow-lg p-4">
                                                <p className="text-xl font-serif">Our <span className="text-yellow-500 underline">Classic Safari Vehicles </span>
                                                 are designed for authentic wildlife adventures, offering comfort,reliability, and excellent
                                                 game-viewing capability across Tanzanias national parks.
                                                </p>
                                                 <div className="mt-10">
                                                    <h1 className="text-2xl font-serif">Features include</h1>
                                                    <ul className="p-4 mb-5">
                                                        <li className="mb-5 text-xl font-serif">Pop-up roof for unobstructed wildlife viewing</li>
                                                         <li className="mb-5 text-xl font-serif">Wide sliding windows for photograph</li>
                                                          <li className="mb-5 text-xl font-serif">Confortable safari seating</li>
                                                           <li className="mb-5 text-xl font-serif">Durable 4x4 off-road capability</li>
                                                            <li className="mb-5 text-xl font-serif">Open viewing design for immersive safari experience</li>
                                                             <li className="mb-5 text-xl font-serif">Storage space for luggage and safari gear</li>
                                                              <li className="mb-5 text-xl font-serif">Ideal for game drives in serengete,Tarangire,lake manyara, and Ngorongoro</li>
                                                    </ul>
                                                 </div>
                                            </div>
                
                                        </div>
                                    </div>
                                </div>


         <Footer/>
     </div>
    
    )
}
