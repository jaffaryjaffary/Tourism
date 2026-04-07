"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createSession } from "../lib/auth";
import { connectToDb } from "../server";
import Admin from "../server/models/Admin";

export async function loginAction(formData) {
  const identifier = formData.get("identifier");
  const password = formData.get("password");

  if (!identifier || !password) {
    redirect("/Login_page?error=1");
  }

  await connectToDb();

  const normalized = String(identifier).trim().toLowerCase();
  const admin = await Admin.findOne({
    $or: [{ email: normalized }, { username: normalized }],
  });

  if (!admin) {
    redirect("/Login_page?error=1");
  }

  const isValid = await bcrypt.compare(String(password), admin.passwordHash);
  if (!isValid) {
    redirect("/Login_page?error=1");
  }

  await createSession({
    id: admin._id.toString(),
    email: admin.email || null,
    username: admin.username || null,
    role: admin.role || "Admin",
  });
  redirect("/Admin_Dashboard");
}
