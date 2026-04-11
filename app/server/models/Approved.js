import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    
    fname:String,
    lname:String,
    email:String,
    phone:String,
    visitDate:String,
    travellars:String,
    gender:String,
    destination: {
    type: [String],
    default: [], // 🔥 muhimu sana
  },
       
    approvedByuser:String,
    approvedByemail:String,

    

},{
    timestamps:true
})

const UserApproved = mongoose.models.UserApproved || mongoose.model('UserApproved',userSchema)
export default UserApproved;