'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Destination(){
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
        }, );
    return(
        <div className='h-screen pt-15'>
        <div style={{
            width:'100%',
            height: '100%',
            backgroundImage: "url('/images/picture39.jpeg')",
            backgroundPosition:'center',
            backgroundSize: 'fixed'
        }}></div>


        <div className="flex items-center justify-center mt-10 bg-black">

            <div className="flex flex-col">
                <div>
                  <h1 className="text-white font-serif text-4xl text-center">OUR DESTINATIONS</h1>
                <p className="text-white font-serif text-2xl text-center">Get in touch with six destinations with it own features</p>
                </div>
                
          

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              
              <div className="p-4">
                <Image src={'/images/picture24.jpeg'} alt="" width={600} height={200}  className="rounded-2xl"/>
                <div className="p-4">
                    <h1 className="text-white font-bold text-2xl  font-serif">NGORONGORO IN TANZANIA</h1>
                    <p className="text-sm font-serif text-white">To visit Tanzania on safari Clients may want to visit a number of Parks.
                        <br/>If they do this 
                        ,They could fly between them, thereby saving travelling <br/>time but also increasing the of your safari. 
                        A week on the northern circuit<br/> safari is just about 
                        long enough to fit in the three or four main national parks.</p>
                        <div className="">
                            <button   onClick={()=> router.push('/Contact')}
                            className="bg-amber-400 text-white font-bold cursor-pointer p-3 rounded-2xl mt-2 text-xl">Get started</button>
                        </div>
                </div>
              </div>

               <div className="p-4">
                <Image src={'/images/picture41.jpg'} alt="" width={600} height={200} className="rounded-2xl"/>
                <div className="p-4">
                    <h1 className="text-white font-bold text-2xl  font-serif">KILIMANJARO MOUNTAIN IN TANZANIA</h1>
                    <p className="text-sm font-serif text-white">

                        The best time for climbing Mount Kilimanjaro depends on weather conditions, 
                        trails<br/> difficulty and personal preferences.Since the mountain is near the equator,
                        it has two<br/>  main seasons dry and wet season. Te wet season is April
                        .may to November makes the<br/>  climb more challenging due to rain
                        ,slippery trails, while the dry season offers clear skies,<br/> better 
                        trail for walks and safer ascent. The dry months also provide breathtaking 
                        views of<br/>  surroundings landscapes making the journey more rewarding. 
                       The peak climbing seasons<br/>  are January, February  and july ,September  when temperatures
                       are moderate  and visibility <br/> is excellent. These months  attract many 
                       peoples and making the trails busier, However the <br/> stable weather helps the climbers to reach the summit.
                    </p>
                        <div className="">
                            <button  onClick={()=> router.push('/Contact')}
                            className="bg-amber-400 text-white font-bold cursor-pointer p-3 rounded-2xl mt-2 text-xl">Get started</button>
                        </div>
                </div>
              </div>
                <div className="p-4">
                <Image src={'/images/picture35.jpeg'} alt="" width={600} height={200} className="rounded-2xl"/>
                <div className="p-4">
                    <h1 className="text-white font-bold text-2xl  font-serif">TARANGIRE IN TANZANIA</h1>
                    <p className="text-sm font-serif text-white">
                      Tarangire national park,lake manyara,Serengeti national
                       park<br/> and Ngorongoro crater ..of course,depend how
                        much you are<br/> willing to pay for the trip.As a 
                        starting point,most of peoples <br/>would regard 5 
                        to 12 days (Exlusive of international flight)<br/> as the ideas length of trip 
                      combining a Tanzania safari<br/> with zanzibar,but 
                      shorter safari which is tanzania safari<br/> without zanzibar is possible.

                    </p>
                        <div className="">
                            <button  onClick={()=> router.push('/Contact')}
                            className="bg-amber-400 text-white font-bold cursor-pointer p-3 rounded-2xl mt-2 text-xl">Get started</button>
                        </div>
                </div>
              </div>
                <div className="p-4">
                <Image src={'/images/picture15.jpeg'} alt="" width={600} height={200} className="rounded-2xl"/>
                <div className="p-4">
                    <h1 className="text-white font-bold text-2xl  font-serif">MIKUMI IN TANZANIA</h1>
                    <p className="text-sm font-serif text-white">
                       A big variable when it comes to determining the cost of your trip 
                       is the level of luxury<br/> you would like to enjoy .Most often,this has 
                       to do with accommodations you will<br/> be staying in, Another factor to 
                       consider is the season in which you are travelling.<br/>The cost of high season packages can be  
                       double that of low season. The length<br/> of the trips is also something that will affects the price.

                    </p>
                        <div className="">
                            <button  onClick={()=> router.push('/Contact')}
                            className="bg-amber-400 text-white font-bold cursor-pointer p-3 rounded-2xl mt-2 text-xl">Get started</button>
                        </div>
                </div>
              </div>
                <div className="p-4">
                <Image src={'/images/picture14.jpeg'} alt="" width={600} height={200} className="rounded-2xl"/>
                <div className="p-4">
                    <h1 className="text-white font-bold text-2xl  font-serif">SERENGETI IN TANZANIA</h1>
                    <p className="text-sm font-serif text-white">
                       The best times for safari holidays is from june to Oct ober ,This coincides with<br/>
                        the dry season, meaning that you are more likely to enjoy favorable weather  <br/>
                        and road conditions. The dry  season is also the best times for seeing wildlife<br/> 
                        As the animals are more closer to the water source. 

                    </p>
                        <div className="">
                            <button  onClick={()=> router.push('/Contact')}
                            className="bg-amber-400 text-white font-bold cursor-pointer p-3 rounded-2xl mt-2 text-xl">Get started</button>
                        </div>
                </div>
              </div>
                <div className="p-4">
                <Image src={'/images/picture42.jpg'} alt="" width={600} height={200} className="rounded-2xl"/>
                 <div className="p-4">
                    <h1 className="text-white font-bold text-2xl  font-serif">ZANZIBAR IN TANZANIA ISLAND</h1>
                    <p className="text-sm font-serif text-white">
                       The best times for safari holidays is from june to Oct ober ,This coincides with<br/>
                        the dry season, meaning that you are more likely to enjoy favorable weather  <br/>
                        and road conditions. The dry  season is also the best times for seeing wildlife<br/> 
                        As the animals are more closer to the water source. 

                    </p>
                        <div className="">
                            <button onClick={()=> router.push('/Contact')}
                            className="bg-amber-400 text-white font-bold cursor-pointer p-3 rounded-2xl mt-2 text-xl">Get started</button>
                        </div>
                </div>
              </div>
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

                <div className="flex items-center justify-center gap-5 mt-5">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-serif text-center">Our Means Of Transportation</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <div className="mt-5 p-4">
                                 <Image src={images[current]} alt="" width={700} height={100} className="rounded-2xl" /> 
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