// "use server";

// import { redirect } from "next/navigation";
// import bcrypt from "bcryptjs";
// import { createSession } from "../lib/auth";
// import { connectToDb } from "../server";
// import Admin from "../server/models/Admin";

// export async function registerAction(formData) {
//   const email = formData.get("email");
//   const username = formData.get("username");
//   const password = formData.get("password");

//   // Validation
//   if (!email || !username || !password) {
//     redirect("/Register_page?error=1");
//   }

//   await connectToDb();

//   const normalizedEmail = String(email).trim().toLowerCase();
//   const normalizedUsername = String(username).trim().toLowerCase();

//   // Check kama user tayari yupo
//   const existingUser = await Admin.findOne({
//     $or: [{ email: normalizedEmail }, { username: normalizedUsername }],
//   });

//   if (existingUser) {
//     redirect("/Register_page?error=2"); // user already exists
//   }

//   // Hash password
//   const hashedPassword = await bcrypt.hash(String(password), 10);

//   // Create new admin
//   const newAdmin = await Admin.create({
//     email: normalizedEmail,
//     username: normalizedUsername,
//     passwordHash: hashedPassword,
//     role: "Admin",
//   });

//   // Create session baada ya register
//   await createSession({
//     id: newAdmin._id.toString(),
//     email: newAdmin.email,
//     username: newAdmin.username,
//     role: newAdmin.role,
//   });

//   redirect("/Admin_Dashboard");
// }