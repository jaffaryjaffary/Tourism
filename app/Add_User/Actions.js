"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { connectToDb } from "../server";
import Admin from "../server/models/Admin";
 import { createSession } from "../lib/auth";

export async function RegisterAction(formData) {
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const gender = formData.get("gender");

  // validation
  if (!fname || !lname || !email || !password || !role || !gender) {
    redirect("/Register_page?error=1");
  }

  await connectToDb();

  const normalizedEmail = String(email).trim().toLowerCase();

  // check existing user
  const existingUser = await Admin.findOne({ email: normalizedEmail });

  if (existingUser) {
    redirect("/Register_Error?error=2");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user
 const newAdmin =  await Admin.create({
    fname,
    lname,
    email: normalizedEmail,
    passwordHash: hashedPassword,
    role,
    gender,
  });

 

   await createSession({
     id: newAdmin._id.toString(),
    email: newAdmin.email,
    role: newAdmin.role,
 });

  if(newAdmin){
    redirect("/Success?success=1");
  }
}