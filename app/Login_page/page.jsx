import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
 import { currentUser } from '@clerk/nextjs/server'
 import { redirect } from 'next/navigation'
import Image from 'next/image'
import Footer from '../../components/Footer'



export default async function Login(){

   const user = await currentUser()
   
    
  
   
  

    
 if (user) 
  redirect("/Add_User")

     

 
      
   
      
   
    
   
    
     
      
    return(
       <div className='h-screen'>
         <ClerkProvider>
                  <header className="flex justify-end items-center p-4 gap-4 h-16 shadow-lg">
                    <Show when="signed-out">
                      <SignInButton  className="bg-[#6c47ff] text-white rounded-full font-medium text-sm 
                        sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer" />
                      <SignUpButton>
                        <button 
                        className="bg-[#6c47ff] text-white rounded-full font-medium text-sm 
                        sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                      <UserButton />
                    </Show>
                  </header>
                  
                </ClerkProvider>

                <div className='flex items-center justify-center mt-20'>
                  
                  <div className='flex flex-col'>
                    <Image src={"/images/picture36.jpeg"} alt='' width={400} height={120}/>
                         <h1 className='text-4xl text-center font-bold mt-5'>Welcome To Smilling</h1>
                  <p className='text-center text-2xl font-semibold'>System user Sign in & Sign up</p>
                  </div>
                 
                </div>

            <Footer/>    
       </div>
    )
}