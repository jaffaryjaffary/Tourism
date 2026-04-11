import Image from "next/image";
import Footer from "../../components/Footer";
import { loginAction } from "./actions";
import { getSessionUser } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage({ searchParams }) {
  const user = await getSessionUser();
  if (user) redirect("/Admin_Dashboard");

  const params = await searchParams;
  const hasError = params?.error;

  return (
    <div className="app-shell h-screen">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="glass-card w-full max-w-md rounded-3xl p-8">
            <p className="section-title text-sm text-[color:var(--accent-dark)]">Admin Access</p>
            <h1 className="mt-3 text-3xl font-semibold">Welcome  Smiling Hours</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Login to access the admin panel and manage your tours, bookings, and more.
            </p>

            <form action={loginAction} className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                 Email
                <input
                  name="identifier"
                  type="text"
                  placeholder="admin@smilinghours.com"
                  className="rounded-2xl border border-transparent bg-white/90 p-3 shadow-sm outline-none ring-1 ring-transparent focus:ring-[color:var(--ring)]"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Password
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="rounded-2xl border border-transparent bg-white/90 p-3 shadow-sm outline-none ring-1 ring-transparent focus:ring-[color:var(--ring)]"
                  required
                />
              </label>

              {hasError && (
                <p className="rounded-2xl bg-red-50 p-3 text-sm text-red-700">
                  Email or password is incorrect! Try again.
                </p>
              )}

              <button
                type="submit"
                className="accent-button mt-2 rounded-2xl px-6 py-3 text-sm font-semibold 
                uppercase tracking-wide cursor-pointer hover:bg-gray-800"
              >
                Login To Dashboard
              </button>

               <p className="mt-4 text-sm text-center text-[color:var(--muted)]">
              Noy yet a member?{" "}
              <a href="/Register" className="text-blue-600 underline">
                Register
              </a>
            </p>
            </form>
          </div>
        </div>

        <div className="relative hidden overflow-hidden lg:flex">
          <Image
            src="/images/picture36.jpeg"
            alt="Safari"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
          <div className="relative z-10 flex h-full w-full flex-col justify-end p-12 text-white">
            <h2 className="text-4xl font-semibold">Smiling Hours African Adventures</h2>
            <p className="mt-4 max-w-md text-sm text-white/80">
              Explore the wonders of Africa with Smiling Hours. From the Serengeti to the Sahara, we offer unforgettable experiences that will leave you with a lifetime of memories.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
