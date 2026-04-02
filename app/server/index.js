
import mongoose from 'mongoose'
// import express from 'express'
// import cors from 'cors'


// const app = express()
// app.use(cors())
// app.use(express.json())

// const PORT = 8081;

// app.get('/', (req,res)=>{
//    res.json({message:'Server is running'})
// })



export const  connectToDb = async()=>{
   const  connectionString = 'mongodb+srv://jaffary:jaffary@cluster0.dcamm9d.mongodb.net/';
   mongoose.connect(connectionString)
   .then(()=>{
    console.log("Database connection successfully")
   }).catch((error)=>{
    console.log(error)
   })
}


// const userSchema = new mongoose.Schema({
//    fname:String,
//     lname:String,
//     email:String,
//     phone:String,
//     visitDate:String,
//     travellars:String,
//     gender:String,
//     destination:String,
//     comment:String
// },{
//     timestamps:true
// })

// const Profile =mongoose.models.Profile ||mongoose.model('Profile',userSchema)

// app.post('/create', async(req,res)=>{
//    const{fname,
//     lname,
//     email,
//     phone,
//     visitDate,
//     travellars,
//     gender,
//     destination,
//     comment} = req.body
//    const data =await Profile({fname,
//     lname,
//     email,
//     phone,
//     visitDate,
//     travellars,
//     gender,
//     destination,
//     comment})
//     await data.save()
//    res.json({message:'Data insert successfully'})
// })



// app.listen(PORT, ()=>{
//    console.log("server running on port",PORT)
// })



export default connectToDb();