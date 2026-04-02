'use server'

import { connectToDb } from "../server"
import {revalidatePath} from "next/cache"
import Profile from "../server/models/UserProfile";
import UserApproved from "../server/models/Approved";
import CreateUser from "../server/models/Users";








export async function CreateUserInfoAction(FormData, pathToRevalidate) {

    await connectToDb();
     await Profile.create(FormData)
     revalidatePath(pathToRevalidate)
    
}

export async function FetchUserInfoAction() {

    await connectToDb()
    const data = await Profile.find()

     return JSON.parse(JSON.stringify(data))
    
    
}

export async function SearchMethodAction(keyword, page) {
    
    
    await connectToDb();

   const limit = 5;
  const skip = (page - 1) * limit;

  const query = keyword
    ? { fname:  { $regex: keyword, $options: "i" } } 
    : {};

  const users = await UserApproved.find(query).skip(skip).limit(limit);

  const total = await UserApproved.countDocuments(query);

  return {
    users: JSON.parse(JSON.stringify(users)),
    totalPages: Math.ceil(total / limit),
  };
    
  
    
}

export async function SearchProfileAction(keyword, page) {
      await connectToDb();

   const limit = 5;
  const skip = (page - 1) * limit;

  const query = keyword
    ? { fname:  { $regex: keyword, $options: "i" } } 
    : {};

  const users = await Profile.find(query).skip(skip).limit(limit);

  const total = await Profile.countDocuments(query);

  return {
    users: JSON.parse(JSON.stringify(users)),
    totalPages: Math.ceil(total / limit),
  };
    
}


export async function GetUserDetailByIdAction(id) {

    await connectToDb()

 const  data = await Profile.findOne({_id:id})

 return JSON.parse(JSON.stringify(data))
    
}

export async function DeleteUserAction(id,pathToRevalidate) {

    await connectToDb();
     await Profile.findByIdAndDelete(id);  
     revalidatePath(pathToRevalidate)

   
    } 
   
   
    
    export async function UserApprovedAction(FormData,pathToRevalidate) {
        await connectToDb()
        await UserApproved.create(FormData)
        revalidatePath(pathToRevalidate)
         return { success: true };
        
    }

    export async function FetchApprovedUserAction() {
        connectToDb()
        const data = await UserApproved.find()
        return JSON.parse(JSON.stringify(data))
        
    }  

    export async function FetchVisitorApproveAction() {

        await connectToDb()
        const data = await UserApproved.find()

        return JSON.parse(JSON.stringify(data))
        
    }


    export async function FetchApprovedVisitorByIdAction(id) {

        await connectToDb()
        const data = await UserApproved.findOne({_id:id})
        return JSON.parse(JSON.stringify(data))
        
    }

    export async function DeleteApproveVisitorAction(id,pathToRevalidate) {

        await connectToDb()
        await UserApproved.findByIdAndDelete(id)
        revalidatePath(pathToRevalidate)
    }



export async function CreateUserSystemProfileAction(FormData,pathToRevalidate) {

  await connectToDb();
  await CreateUser.create(FormData)
  revalidatePath(pathToRevalidate)
  
}


export async function FetchCreateUserSystemProfileAction(id) {

  await connectToDb();
  const data = await CreateUser.findOne({userId:id})

  return JSON.parse(JSON.stringify(data))
  
}

export async function FetchAllCreatUserSystemAction() {

  await connectToDb()
  const data = await CreateUser.find()
  return JSON.parse(JSON.stringify(data))
  
}


export async function SearchCreateUserSystem(keyword, page) {
      await connectToDb();

   const limit = 5;
  const skip = (page - 1) * limit;

  const query = keyword
    ? { fname:  { $regex: keyword, $options: "i" } } 
    : {};

  const users = await CreateUser.find(query).skip(skip).limit(limit);

  const total = await CreateUser.countDocuments(query);

  return {
    users: JSON.parse(JSON.stringify(users)),
    totalPages: Math.ceil(total / limit),
  };
    
}


export async function GetCreatedUserSystemByIdAction(id) {

    await connectToDb()

 const  data = await CreateUser.findOne({_id:id})

 return JSON.parse(JSON.stringify(data))
    
}

export async function DeleteCreateUserSystemAction(id,pathToRevalidate){

  await connectToDb();
  await CreateUser.findByIdAndDelete(id)

  revalidatePath(pathToRevalidate)


}

export async function UpdateCreateUserSystemAction(FormData,pathToRevalidate,id) {
 await connectToDb();

 const {userId,fname,lname,email,phone,gender,role} = FormData;
 await CreateUser.findByIdAndUpdate({_id:id}, {userId,fname,lname,email,phone,gender,role},{new:true} )
  
revalidatePath(pathToRevalidate) 
}


export async function GetCurrentCreateUserSystemByIAction(id) {

  const data = await CreateUser.findOne({_id:id})
  return JSON.parse(JSON.stringify(data))
  
}


