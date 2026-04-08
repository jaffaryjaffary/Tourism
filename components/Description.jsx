'use client'
import { useRouter } from 'next/navigation';
import Footer from '../components/Footer'
import Image from "next/image";
export default function DescriptionPage(){
   const router = useRouter()
    return(

    <div className='h-screen'>
        <div style={{
            width:'100%',
            height: '100vh',
            backgroundImage: "url('/images/picture19.jpeg')",
            backgroundPosition:'center',
            backgroundSize: 'cover'
        }}>
        
        </div>
                <div className="flex items-center justify-center mt-10">
                <div className="flex flex-col">
                    <h1 className="text-5xl font-semibold text-center">Get Your Accomodation</h1>

                  
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 gap-5">
                           <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture27.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                     className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture30.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>

                                   <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                    className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture26.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>

                                   <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                     className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                           
                           
                           
                            
                        </div>


                         <div className="mt-10">
                            <h1 className="text-5xl font-semibold text-center">Get Your Visit</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 gap-5">
                                 <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture17.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                    className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture20.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                    className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture4.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                    className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture15.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                     className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture33.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                    className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture35.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                    className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                                
                            </div>
                          </div>





                                <div className="mt-10">
                            <h1 className="text-5xl font-semibold text-center">Traditional Availability</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 gap-5">
                                 <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture7.jpeg'} alt="" width={400} height={50} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                    className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture5.jpeg'} alt="" width={400} height={200} className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                     className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>
                            <div className="bg-white shadow-lg w-100 p-4">

                             <Image src={'/images/picture42.jpeg'} alt="" width={400} height={200} objectFit="fixed" className="card-image"/>
                             <p className="p-4">We listening you what you want to do and your times as well ,we 
                                offer highly private safari, Families safari,Groups safari,Honeymooners 
                                safari, at affordable prices ,by cutting out the middle man and stepping 
                                away from traditional commissions systems. We manage to keep
                                 our price for African travel experience as reasonable as possible.</p>
                                 <div className="flex items-center justify-center m-5">
                                    <button onClick={()=> router.push('/Contact')}
                                     className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl">Get Smilling Now</button>
                                 </div>
                           </div>


                              
                           
                            
                           
                                
                            </div>
                          </div>




                    </div>

                   
                </div>


                  <div className=''>
                        <Footer/>    
                  </div>
               

               
         </div>     
                
         
        
    )
}
