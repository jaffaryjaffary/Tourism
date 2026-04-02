'use client'
import { IoMdClose } from "react-icons/io";
import { CreateUserInfoAction } from "../app/Actions";
export default function Form({error,formData,setFormData,setError,setSuccess,initialValues}){
     async function HandleSubmit() {
    
        if(!formData.fname || !formData.lname || !formData.email || !formData.visitDate || 
          !formData.travellars || !formData.destination || !formData.gender || !formData.phone){
              setError('Please fill all the required fields')
          }else{
           await CreateUserInfoAction(
            formData,'Contact')
          
    
           
           setSuccess(true)
           setFormData(initialValues)
           setError(false)
      
          }
        
      }
      const HandleForm = (e)=>{
    e.preventDefault()

  }
  console.log(formData)
    return(
        <div>
             <div>
                            <h1 className="text-2xl font-bold text-center text-yellow-300">Get Smilling by Register</h1>
                             <form action={HandleForm} onSubmit={HandleForm}>
                               <div className="bg-white shadow-lg p-4 ">
                                   
                                   {error &&(
                                     <div className="flex items-center justify-between bg-red-400 p-4">
                                   {error && ( <p  className="text-center text-white">{error}</p>)} 
                                    <span><IoMdClose onClick={()=> setError(false)} color="white" className="cursor-pointer"/></span>
                                   </div>
                                   )}
                                  
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                  <div className="flex flex-col">
                                  <label htmlFor="">Your FirstName</label>
                                  <input type="text" name='fname'  placeholder="John" className="border border-gray-300 p-3"
                                  value={formData.fname}
                                  onChange={(event)=> setFormData({ ...formData, fname:event.target.value})}
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <label htmlFor="">Your Lastame</label>
                                  <input type="text" name='lname'  placeholder="Smith" className="border border-gray-300 p-3"
                                   value={formData.lname}
                                  onChange={(event)=> setFormData({ ...formData, lname:event.target.value})}
                                  />
                                </div>
                                </div>
                                 <div>
                                  <div>
                                    
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                  <label htmlFor="">Your Email</label>
                                  <input type="email"  name='email' placeholder="john@gmail.com" className="border border-gray-300 p-3"
                                   value={formData.email}
                                  onChange={(event)=> setFormData({ ...formData, email:event.target.value})}
                                  />
                                </div>
                                 <div className="flex flex-col">
                                  <label htmlFor="">Phone-Number</label>
                                  <input type="tel"  name='phone' placeholder="99999999999" className="border border-gray-300 p-3"
                                   value={formData.phone}
                                  onChange={(event)=> setFormData({ ...formData, phone:event.target.value})}
                                  />
                                </div>
                                 {/* <div>

                                   <h3>Phone Number</h3>

                                    <PhoneInput className=""
                                     country={"tz"}
                                    value={formData.phone}
                                    onChange={(event)=> setFormData({ ...formData, phone:event.target.value})}/>
                             </div> */}
                                  </div>
                               

                                 </div>
                                

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

                                <div className="flex flex-col">
                                  <label htmlFor="">Select Date</label>
                                  <input type="date" name='visitDate' className="border border-gray-300 p-3"
                                   value={formData.visitDate}
                                  onChange={(event)=> setFormData({ ...formData, visitDate:event.target.value})}
                                  />
                                </div>

                                 <div className="flex flex-col">
                                  <label htmlFor="">Travellers</label>
                                  <input type="text"  name='travellars' placeholder="eg. 2adults,1 child" className="border border-gray-300 p-3"
                                   value={formData.travellars}
                                  onChange={(event)=> setFormData({ ...formData, travellars:event.target.value})}
                                  />
                                </div>


                                </div>
                               

                                <div className="flex flex-col">
                                  <label htmlFor="">Select Gender</label>
                                  
                                    <label htmlFor=""  ><input type="radio" name='gender' value='Male' 
                                     onChange={(event)=> setFormData({...formData, gender:event.target.value})}
                                    /> Male</label> 
                                   <label htmlFor=""><input type="radio" name='gender' 
                                   onChange={(event)=> setFormData({...formData, gender:event.target.value})}
                                  value="Female"
                                   /> Female</label> 
                                  
                                
                                </div>

                          
                                <div className="flex flex-col">
                                  <label htmlFor="">Your Destination</label>
                                  <select  name="destination" id="" className="border border-gray-300 p-3"
                                  value={formData.destination}
                                  onChange={(event)=> setFormData({ ...formData, destination:event.target.value})}
                                  >
                                      
                                    <option value="">Select Destination</option>
                                    <option value="Serengeti">Serengeti</option>
                                      <option value="Mikumi">Mikumi</option>
                                        <option value="Tarangire">Tarangire</option>
                                          <option value="Kilimanjaro">Kilimanjaro</option>
                                            <option value="Ngorongoro">Ngorongoro</option>
                                            <option value="Zanzibar">Zanzibar</option>
                                  </select>
                                  <div className="flex flex-col">
                                  <label htmlFor="">Tells  us about your trip(optional)</label>
                                  <textarea name="comment" id="" placeholder="What are most exicited about?" className="border border-gray-300 p-3"
                                  value={formData.comment}
                                  onChange={(event)=> setFormData({ ...formData, comment:event.target.value})}
                                  ></textarea>
                                </div>
                                  
                                   <div className="flex flex-col mt-5">
                                 <button  type="submit" onClick={HandleSubmit}
                                  className="bg-amber-400 p-3 cursor-pointer text-xl rounded-2xl text-white font-bold">Smilling Now</button>
                                </div>
                                </div>
                              </div>

                             
                              
                             </form>
                            </div> 
        </div>
    )
}