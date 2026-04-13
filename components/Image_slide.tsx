"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import Banner from '../components/Banner'
import { useRouter } from "next/navigation";
export default function ImageSliderPage() {

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
             "/images/picture14.jpeg",
       
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
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${images[current]})`,
        backgroundPosition:'center',   
        transition: "background-image 1s ease-in-out",
        backgroundSize:'cover'
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
          <h1 className="text-4xl font-bold text-center">Adventure Awaits, Smiles<br/> Guaranteed</h1>
        <p className="text-center text-3xl mt-2 font-serif">Discover the world with personalized adventures designed to create lasting memories</p>

          
        <div className="mt-0 flex items-center justify-center gap-5 p-3">
          <button onClick={()=> router.push('/Contact')}
          className="bg-amber-400 p-1 text-white  font-bold cursor-pointer rounded-2xl hover:bg-transparent border lg:p-4">GET START WITH SMILING</button>
          <button onClick={()=> router.push('/Destination')}
          className="bg-amber-400  font-bold cursor-pointer rounded-2xl text-white p-1 hover:bg-transparent border lg:p-4">EXPLORE DESTINATIONS</button>
        </div>
         </div>
     
      </div>
       </div>
       
       <div className="flex items-center justify-center p-10 bg-white">
        <div className="flex flex-col">

           <h1 className="text-center text-2xl font-bold text-amber-300">DISCOVER & SHARE</h1>
         <p className="font-serif">Smiling Hours African Adventures is your gateway to extraordinary safari 
        experiences across Tanzania. We curate personalized journeys that connect you with 
        authentic wildlife, breathtaking landscapes, and unforgettable moments. With expert planning and passionate
        guides, we transform travel into life-changing African adventures.
        The success of your trip ultimately lies in the hands of our professional guides, who are dedicated to turning your dreams into reality. Our team shares a deep passion for Tanzania—each member having been born, raised, and having worked extensively on the ground.

             Adventure awaits you in breathtaking landscapes filled with abundant wildlife and rich culture. Experience the very essence of Tanzania, from the vast plains of the Serengeti to the majestic Mount Kilimanjaro, and the stunning coastline of Zanzibar.

            We want you to discover the true spirit of adventure in Tanzania and share unforgettable moments with us. We pride ourselves on our in-depth local knowledge, giving you access to hidden gems and authentic experiences.

             Our specialty lies in guiding you beyond the well-worn paths, offering a unique and truly immersive journey.
        </p>

         

        </div>

       
       
       </div>

       <Banner/>

    </div>
   
  );
}