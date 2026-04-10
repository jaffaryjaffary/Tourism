import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "tourisim_admin_session";
const SECRET = process.env.AUTH_SECRET || "dev-auth-secret-change";

function sign(value) {
  const signature = crypto.createHmac("sha256", SECRET).update(value).digest("base64url");
  return `${value}.${signature}`;
}

function verify(token) {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [value, signature] = parts;
  const expected = crypto.createHmac("sha256", SECRET).update(value).digest("base64url");
  if (signature.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    const json = Buffer.from(value, "base64url").toString("utf8");
    return JSON.parse(json);
  } catch {
    return null;
  }
}

// export async function createSession(user) {
//   const payload = Buffer.from(JSON.stringify(user)).toString("base64url");
//   const token = sign(payload);
//   const cookieStore = await cookies();
//   cookieStore.set(COOKIE_NAME, token, {
//     httpOnly: true,
//     sameSite: "lax",
//     secure: process.env.NODE_ENV === "production",
//     path: "/",
//   });
// }

// export async function clearSession() {
//   const cookieStore = await cookies();
//   cookieStore.set(COOKIE_NAME, "", {
//     httpOnly: true,
//     sameSite: "lax",
//     secure: process.env.NODE_ENV === "production",
//     path: "/",
//     maxAge: 0,
//   });
// }



export async function createSession(user) {
  const payload = Buffer.from(JSON.stringify(user)).toString("base64url");
  const token = sign(payload);

  const cookieStore = cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true, // muhimu production
    sameSite: "lax", // unaweza jaribu "strict" kama bado issue
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // siku 7
  });
}


export async function getSessionUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return verify(token);
}

export async function requireSessionUser() {
  const user = await getSessionUser();
  if (!user) redirect("/Login_page");
  return user;
}

export function getUserIdentifier(user) {
  if (!user) return null;
  return user.id || user.email || null;
}
