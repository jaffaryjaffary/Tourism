"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BsPersonStanding } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import Footer from "./Footer";
export default function AboutUsPage(){

    const images = [
    "/images/picture15.jpeg",
    "/images/picture28.jpeg",
    "/images/picture32.jpeg",
     "/images/picture19.jpeg",
      "/images/picture14.jpeg",
      "/images/picture23.jpeg",
      "/images/picture41.jpg",
      "/images/picture42.jpg",
    
  
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);
  }, );
    return(
        <div className="h-screen pt-20">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5">
        <div className="flex items-center justify-center">
                <div className="">
                  <Image src={images[current]} alt="" width={600} height={300}   className="rounded-lg"/> 
                </div>
        </div>
                
                <div>

                    <h1 className="font-bold text-2xl p-4">Our Story & Approach</h1>
                     <p className="text-xl bg-white shadow-lg p-4 rounded-2x font-serif">Founded by passionate travelers in 2018, Smiling Hours African Adventures was born from a simple belief: safari travel should be transformative, accessible, and filled with genuine joy and authentic African experiences.

We have spent years building relationships with local 
communities across Africa, discovering hidden wildlife treasures,
 and perfecting the art of crafting meaningful safari adventures. Our approach 
 combines meticulous planning with spontaneous discovery, creating the perfect balance for unforgettable African journeys.

Every safari trip we design reflects our commitment to authentic
 experiences, sustainable travel, and the connections that make life rich. 
 We are not just tour operators—we are your partners in exploration.</p>
                </div>
    
            </div>

            <div className="flex items-center justify-center mt-5 bg-white">
                <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-5">  <Image src={'/images/picture44.jpeg'} alt="" width={200} height={100} className="rounded-full"/></div>
                      <h1 className="text-center mt-5 font-bold text-2xl">Our Founder</h1>
                    <p className=" p-4 rounded-2x font-serif ">
                        Smiling hours african adventures is a family owned  local Tour operator based in Arusha Tanzania.
                         Founded by  Kassim Ally/ Junga  very experienced Tour  guide.
                          and Operator  with 20 years in Tourism industry in Tanzania. Our guides
                           speaks english ,french,spanish are resourse and we are proud of  them becouse 
                            of their knowleges ,guiding skills  they 
                        provide valuable support  to the clients after understanding 
                        clients expectations and their interests.</p>
                        <div className="flex items-center justify-center mt-5">
                                 <Image src={'/images/picture36.jpeg'} alt="" width={200} height={100} className=""/>
                        </div>
                         
                </div>
            </div>

            <div className="flex items-center justify-center mt-10 bg-[#F8F7FA]">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold text-center mt-8">What Sets Us Apart</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5 p-10">
                        <div className="flex items-center justify-center gap-5">
                            <span><AiOutlineSafety size={50}  className="text-yellow-400"/></span>
                            <div>
                                <h1 className="text-xl font-semibold">Safety First</h1>
                                <p>Every adventure is thoroughly vetted with comprehensive insurance coverage</p>
                            </div>
                        </div>
                          <div className="flex items-center justify-center gap-5">
                            <span><BsPersonStanding size={50}  className="text-yellow-400"/></span>
                            <div>
                                <h1 className="text-xl font-semibold">Expert Guides</h1>
                                <p>Local professionals with years of experience and cultural knowledge</p>
                            </div>
                        </div>
                           <div className="flex items-center justify-center gap-5">
                            <span><GiSelfLove size={50}  className="text-yellow-400"/></span>
                            <div>
                                <h1 className="text-xl font-semibold">Personalized Care</h1>
                                <p>Small groups and customized experiences tailored to your interests</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
