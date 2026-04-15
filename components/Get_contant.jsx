'use client'
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import Footer from "./Footer";
import { useEffect, useState } from "react";
import Success from "./Success";
import Form from "./Form";
import { FaPersonBooth } from "react-icons/fa6";
import { GetHelpAction } from "../app/Actions";

const initialValues ={
  fname: '',
  lname: '',
  email: '',
  visitDate: '',
  travellars : '',
  destination :'',
  phone:'',
  gender: '',
  comment: '',

}

const InitialNumber={
  number:''
}



export default function GetContactPage({ FetchDestination}){
  const [formData, setFormData] = useState(initialValues)
  const [error, setError] = useState()
  const [success,setSuccess] = useState(false)
  const [getPhone, setGetPhone] = useState(false)
  const [getNumber,setNumber] = useState(InitialNumber)
  const [errr, setErrr] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)


  async function HandleSubmit(e) {
    e.preventDefault()

    if(!getNumber.number){
      setErrr('Please enter your phone number')
      return
    } 

    await GetHelpAction(getNumber,'/Contact')
    setNumber(InitialNumber)
    setSuccessMessage('Your request has been submitted successfully, we will contact you soon')
    setError(false)
    
    
    
  }
 

  useEffect(()=>{
    setTimeout(()=>{
      setSuccess(false)
    }, 40000)
  })

      const handleWhatsAppClick = () => {
    const phoneNumber = "255752598821"; // your number
    const message = "Hello, I want to book a tour";
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  };
  
    return(
        <div className="h-screen">

            <div style={{
            width:'100%',
            height: '100vh',
            backgroundImage: "url('/images/picture1.jpeg')",
            backgroundPosition:'center',
            backgroundSize: 'cover'
        }}>
        </div>
            <div className="flex items-center justify-center mt-20">
                <div className="flex flex-col">
                     <h1 className="text-4xl font-bold text-center">Get In Touch</h1>
                     <p className="text-center text-xl">Have questions about our adventures? Want to plan a custom
                         trip? Our team is here to<br/> help you every step of the way.</p>


                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 p-4">
                          <div>
                            <h1 className="text-xl font-semibold">Contact Information</h1>
                              <div className="flex items-center gap-3 mt-8">
                                <span className="bg-amber-100 p-4 rounded-2xl"><FaPhone  size={30} className="text-yellow-400"/></span>
                                <div>
                                  <h1 className="text-xl font-bold">Phone</h1>
                                  <p className="text-gray-400">+255 752598821/+255 653944565/+255 684005668</p>
                                  <span className="text-gray-400">Mon-Fri 9am-6pm EST</span>
                                </div>

                                
                              </div>
                               <div className="flex items-center gap-3 mt-8">
                                <span className="bg-amber-100 p-4 rounded-2xl"><FaAddressBook  size={30} className="text-yellow-400"/></span>
                                <div>
                                  <h1 className="text-xl font-bold">Address</h1>
                                  <p className="text-gray-400">P.O BOX 2084</p>
                                  
                                </div>

                                
                              </div>
                               <div className="flex items-center gap-3 mt-8">
                                <span className="bg-amber-100 p-4 rounded-2xl"><IoLocationOutline  size={30} className="text-yellow-400"/></span>
                                <div>
                                  <h1 className="text-xl font-bold">Location</h1>
                                  <p className="text-gray-400">ARUSHA TANZANIA</p>
                                  
                                </div>

                                
                              </div>
                               <div className="flex items-center gap-3 mt-8">
                                <span className="bg-amber-100 p-4 rounded-2xl"><FaPersonBooth  size={30} className="text-yellow-400"/></span>
                                <div>
                                  <h1 className="text-xl font-bold">Our Oversees Representatives</h1>
                                  <p className="text-gray-400">355N.Rob Way Anaheim CA 92801 USA</p>
                                  <h1>Tell #714 300-4559</h1>
                                  
                                </div>

                                
                              </div>

                               <div className="flex items-center gap-3 mt-8">
                                <span className="bg-amber-100 p-4 rounded-2xl"><AiOutlineWhatsApp  size={30} className="text-green-500"/></span>
                                <div>
                                    <h1 className="text-xl font-bold">WhatsApp</h1>
                                  <p className="text-gray-400">+255 752598821/+255 653944565</p>
                                  
                                </div>

                                
                              </div>

                                 <h1 className="mt-5 text-gray-500">Follow us for adventure inspiration, 
                                  travel tips, and exclusive member updates</h1>

                                  <div className="flex items-center gap-2 mt-5">
                                    <span><CgProfile size={35}  color="green" className=""/><h1 className="text-green-400 text-sm text-center">
                                       Active</h1></span>
                                     <button 
                                        onClick={handleWhatsAppClick}
                                     className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                                          >
                                  Chat on WhatsApp
                                    </button>

                                  </div>
                                   
                                <div><button onClick={()=> setGetPhone(true)}
                                className="bg-amber-500 text-white py-2 px-4 rounded-2xl cursor-pointer mt-5 hover:bg-amber-700">
                                  Ask a Question && Get any Help</button>
                                
                                </div>
                                 {getPhone && (


                                  <div className="mt-5 bg-white p-5 rounded-lg shadow-lg">
                                    <span className="" onClick={() => setGetPhone(false)}>
                                      <IoMdClose  className="cursor-pointer" /></span>
                                      {errr && <p className="text-red-500 mt-3">{errr}</p>}
                                      {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
                                  <form action={HandleSubmit} className="mt-5">
                                    <label htmlFor="">Enter Phone Number</label>
                                    <input type="text" name="number" placeholder="Enter Your Phone Number" 
                                    className="mt-1 block w-full rounded-md
                                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4" 
                                     value={getNumber.number}
                                     onChange={(e)=>setNumber({...getNumber,number:e.target.value})}
                                    
                                     />
                                     <button type="submit" onClick={HandleSubmit}
                                     className="bg-amber-500 text-white py-2 px-4 rounded-2xl cursor-pointer mt-5 hover:bg-amber-700">
                                       Submit
                                     </button>
                                  </form>
                                </div>

                                 )}
                                
                               
                            </div>
                         
                             
                        <Form error={error} 
                        formData={formData} setFormData={setFormData} 
                        setError={setError} setSuccess={setSuccess} initialValues={initialValues}  FetchDestination={ FetchDestination}/>

                           {success &&(
                               <Success/>
                              )}
                         </div>

                        


                         <div className="bg-amber-300 mt-5">
                           <div className="p-4">
                             <h1 className="text-2xl">Office Hours</h1>
                             <div className="flex items-center justify-between mt-5">
                                <span className="text-xl">Monday - Friday</span>
                                <small>24 Hours</small>
                             </div>
                             <div className="flex items-center justify-between mt-5">
                                <span className="text-xl">Saturday</span>
                                <small>24 Hours</small>
                             </div>
                              <div className="flex items-center justify-between mt-5">
                                <span className="text-xl">Sunday</span>
                                <small>24 Hours</small>
                             </div>
                           </div>
                         </div>
                </div>
               
            </div>
            <Footer/>
        </div>
    )
}