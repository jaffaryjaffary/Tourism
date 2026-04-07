import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    userId:String,
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
       
    approvedByFname:String,
    approvedBylname:String,

    

},{
    timestamps:true
})

const UserApproved = mongoose.models.UserApproved || mongoose.model('UserApproved',userSchema)
export default UserApproved;