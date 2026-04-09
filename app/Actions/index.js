'use server'

import { connectToDb } from "../server"
import {revalidatePath} from "next/cache"
import Profile from "../server/models/UserProfile";
import UserApproved from "../server/models/Approved";
import CreateUser from "../server/models/Users";
import Admin from "../server/models/Admin";
import Destination from "../server/models/Image";
import cloudinary from "../lib/cloudinary";
import { redirect } from "next/navigation";
import Help from "../server/models/help";


export async function CreateUserInfoAction(formData) {

    await connectToDb();

    
    const data = {
      fname: formData.get("fname"),
      lname: formData.get("lname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      visitDate: formData.get("visitDate"),
      travellars: formData.get("travellars"),
      gender: formData.get("gender"),
      destination: formData.getAll("destination"), // muhimu sana
      comment: formData.get("comment"),
    };

   const res = await Profile.create(data);

   if(res){
      redirect('/Booking_Success')
    } 

   
    
  
    
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
        await connectToDb()
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
  if (!id) return null;
  const data = await Admin.findOne({
    $or: [{ _id: id }, { email: id }],
  });


 

  return JSON.parse(JSON.stringify(data))

   
}

export async function FetchAllCreatUserSystemAction() {

  await connectToDb()
  const data = await Admin.find()
  return JSON.parse(JSON.stringify(data))
  
}


export async function SearchCreateUserSystem(keyword, page) {
      await connectToDb();

   const limit = 5;
  const skip = (page - 1) * limit;

  const query = keyword
    ? { fname:  { $regex: keyword, $options: "i" } } 
    : {};

  const users = await Admin.find(query).skip(skip).limit(limit);

  const total = await Admin.countDocuments(query);

  return {
    users: JSON.parse(JSON.stringify(users)),
    totalPages: Math.ceil(total / limit),
  };
    
}


export async function GetCreatedUserSystemByIdAction(id) {

    await connectToDb()

 const  data = await Admin.findOne({_id:id})

 return JSON.parse(JSON.stringify(data))
    
}




export async function GetCurrentCreateUserSystemByIAction(id) {

  const data = await CreateUser.findOne({_id:id})
  return JSON.parse(JSON.stringify(data))
  
}

export async function UploadUserImageAction(formData) {

 await connectToDb();
   const name = formData.get("name");
    const description = formData.get("description");
    const location = formData.get("location");
    const imageUrl = formData.get("image");

  if (!imageUrl || imageUrl.size === 0) {
      return { success: false, message: "No file uploaded" };
    }
   const bytes = await imageUrl.arrayBuffer();
   const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "Images" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
       
   const res =  await Destination.create({
      name,
      description,
      location,
      imageUrl: result.secure_url,
    });


      if(res){
      redirect('/Upload_success')
        

   
    }
     
    return { success: true, message: "Image uploaded successfully" };

  
}



export async function FetchAllDestinationdAction() {

  await connectToDb();

  const data = await Destination.find()

  return JSON.parse(JSON.stringify(data))

}
   

export async function GetDestinationByIdAction(id) {

  await connectToDb();
  const data = await Destination.findOne({_id:id})
  return JSON.parse(JSON.stringify(data))
    
}


export async function UpdateDestinationAction(formData) {
  await connectToDb();

  const id = formData.get("id");
  const name = formData.get("name");
  const description = formData.get("description");
  const location = formData.get("location");
  const image = formData.get("image");

  const existing = await Destination.findById(id);

  if (!existing) {
    return { success: false, message: "Data not found" };
  }

  let imageUrl = existing.imageUrl;

  // ✅ If new image uploaded
  if (image && image.size > 0) {
    // 🔥 Delete old image from Cloudinary
    if (existing.imageUrl) {
      const publicId = existing.imageUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`Images/${publicId}`);
    }

    // Upload new image
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "Images" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    imageUrl = result.secure_url;
  }

  // Update DB
  await Destination.findByIdAndUpdate(id, {
    name,
    description,
    location,
    imageUrl,
  });

  return { success: true, message: "Updated successfully" };
}




export async function DeleteDestinationByIdActions(id) {
  await connectToDb();

  const data = await Destination.findById(id);

  if (!data) {
    return { success: false, message: "Data not found" };
  }

  // 🔥 Delete image from Cloudinary
  if (data.imageUrl) {
    const publicId = data.imageUrl.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(`Images/${publicId}`);
  }

  // Delete from DB
  await Destination.findByIdAndDelete(id);

  return { success: true, message: "Deleted successfully" };
}


export async function UpdateCreateUserSystemAction(formData) {
  await connectToDb();
   
  const id = formData.get("id");
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  const email = formData.get("email");
  const role = formData.get("role");  
   const gender = formData.get("gender");  




  const existing = await Admin.findById(id);

  if (!existing) {
    return { success: false, message: "Data not found" };
  }  
  const EmailExist = await Admin.findOne({ email, _id: { $ne: id } });
  if(EmailExist){
    redirect("/Register_Error?error=2")
  }
  await Admin.findByIdAndUpdate(id, {
    fname,
    lname,
    email, 
    role,
    gender     
}
  );

  return { success: true, message: "Updated successfully" };
} 

export async function DeleteCreateUserSystemAction(id,pathToRevalidate) {
  await connectToDb();
   await Admin.findByIdAndDelete(id)
   revalidatePath(pathToRevalidate)
  return { success: true, message: "Deleted successfully" };
}


export  async function GetHelpAction(FormData,pathToRevalidate) {
  await connectToDb()
  await Help.create(FormData)
 revalidatePath(pathToRevalidate)  
}

export async function FetchHelpAction() {
  await connectToDb()
  const data = await Help.find()
  return JSON.parse(JSON.stringify(data)) 
}

export async function DeleteHelpAction(id,pathToRevalidate) {
  await connectToDb()
  await Help.findByIdAndDelete(id)
  revalidatePath(pathToRevalidate)
  return { success: true, message: "Deleted successfully" };
}