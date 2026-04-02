import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

    userId:String,
    email:String,
    userInfo:{
    fname:String,
    lname:String,
    phone:String,
    gender:String,
    role:String,
    }
    
},{
    timestamps:true
})

const CreateUser = mongoose.models.CreateUser || mongoose.model("CreateUser", UserSchema)
export default CreateUser