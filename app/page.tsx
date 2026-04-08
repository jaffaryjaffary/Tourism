'use client'
import { redirect } from "next/navigation";
import { useEffect } from "react";



export default  function GetPage() {
  
  useEffect(()=>{
    setTimeout(()=>{
      redirect('/Home')
    },3000)
  })
  
          
        
      
        
  
  return (
    
  <div>
    <div className="bg-[url('/images/picture36.jpeg')] bg-fixed bg-center h-screen">

</div>
</div>
    
     
 
  );
}
