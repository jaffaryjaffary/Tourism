'use client'
import { useRouter } from 'next/navigation'
import Footer from '../components/Footer'
export default function Adventure(){
    const router = useRouter()
    return(
       <div>
        <div className="p-4 bg-amber-400 mt-5">
            <div className="flex items-center justify-center">
                <div className="flex flex-col">
                      <h1 className="text-5xl text-white text-center">Ready to Start Your Adventure?</h1>
                      <p className="text-center text-xl text-white mt-5">
                        Join thousands of happy travelers who have discovered the world with us</p>

                        <div className="flex items-center justify-center mt-5">
                             <button onClick={()=> router.push('/Contact')}
                              className="bg-white p-4 text-xl text-center cursor-pointer w-90 rounded-2xl ">Join Smilling Hours</button>
                        </div>

                        

                       
                </div>
                
               
            </div>

           
        </div>
 <Footer/>
        </div>
    )
}