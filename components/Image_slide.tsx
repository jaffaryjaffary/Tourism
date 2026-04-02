"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import Banner from '../components/Banner'
import { useRouter } from "next/navigation";
export default function ImageSlider() {

  const images = [
    "/images/picture1.jpeg",
    "/images/picture18.jpeg",
    "/images/picture4.jpeg",
    "/images/picture13.jpeg",
    "/images/picture24.jpeg",
     "/images/picture25.jpeg",
      "/images/picture29.jpeg",
       "/images/picture22.jpeg",
        "/images/picture19.jpeg",
         "/images/picture41.jpg",
           "/images/picture42.jpg",
       
  ];

  const [current, setCurrent] = useState(0);
  const router = useRouter()

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);
  }, );

  return (

    <div
      style={{
        height: "95vh",
        width: "100%",
        backgroundImage: `url(${images[current]})`,
        backgroundPosition:'center',   
        transition: "background-image 1s ease-in-out",
        backgroundSize:'fixed'
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "200px",
        
          height: "100%"
        }}
      >   
        <div className="flex items-center justify-center">

         <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-center">Adventure Awaits, Smiles<br/> Guaranteed</h1>
        <p className="text-center text-4xl mt-5">Discover the world with personalized adventures designed to create lasting memories</p>

          
        <div className="mt-5 flex items-center justify-center gap-5 p-3">
          <button onClick={()=> router.push('/Contact')}
          className="bg-amber-400 p-2 text-white  font-bold cursor-pointer rounded-2xl hover:bg-transparent border lg:p-4">GET START WITH SMILING</button>
          <button onClick={()=> router.push('/Destination')}
          className="bg-amber-400  font-bold cursor-pointer rounded-2xl text-white p-2 hover:bg-transparent border lg:p-4">EXPLORE DESTINATIONS</button>
        </div>
         </div>
     
      </div>
       </div>
       
       <div className="flex items-center justify-center p-10 bg-white">
        <div className="flex flex-col">

           <h1 className="text-center text-2xl font-bold text-amber-300">DISCOVER & SHARE</h1>
         <p className="text-center text-xl">Smiling Hours African Adventures is your gateway to extraordinary safari 
        experiences<br/> across Tanzania. We curate personalized journeys that connect you with 
        authentic wildlife,<br/> breathtaking landscapes, and unforgettable moments. With expert planning and passionate<br/> 
        guides, we transform travel into life-changing African adventures.</p>

         

        </div>

       
       
       </div>

       <Banner/>

    </div>
   
  );
}