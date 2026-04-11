import Image from "next/image";
import Footer from "../../components/Footer";
import { registerAction } from "./action";
import { getSessionUser } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function Register({ searchParams }) {
  const user = await getSessionUser();
  if (user) redirect("/Admin_Dashboard");

  const params = await searchParams;
  const error = params?.error;
  
  return (
    <div className="app-shell h-screen">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="glass-card w-full max-w-md rounded-3xl p-8">
            <p className="section-title text-sm text-[color:var(--accent-dark)]">
              Admin Registration
            </p>
            <h1 className="mt-3 text-3xl font-semibold">
              Create Your Account
            </h1>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Fill your information to create account.
            </p>

            <form action={registerAction} className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                Username
                <input
                  name="username"
                  type="text"
                  placeholder="admin"
                  className="rounded-2xl border border-transparent bg-white/90 p-3 shadow-sm outline-none focus:ring-[color:var(--ring)]"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="admin@smilinghours.com"
                  className="rounded-2xl border border-transparent bg-white/90 p-3 shadow-sm outline-none focus:ring-[color:var(--ring)]"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Password
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="rounded-2xl border border-transparent bg-white/90 p-3 shadow-sm outline-none focus:ring-[color:var(--ring)]"
                  required
                />
              </label>

              {error == 1 && (
                <p className="rounded-2xl bg-red-50 p-3 text-sm text-red-700">
                  Please fill all the required fields.
                </p>
              )}

              {error == 2 && (
                <p className="rounded-2xl bg-red-50 p-3 text-sm text-red-700">
                  Username or email already exist.
                </p>
              )}

              <button
                type="submit"
                className="accent-button mt-2 rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-wide"
              >
                Create Admin Account
              </button>
            </form>

            <p className="mt-4 text-sm text-center text-[color:var(--muted)]">
              Already have an account?{" "}
              <a href="/Login_page" className="text-blue-600 underline">
                Login
              </a>
            </p>
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
            <h2 className="text-4xl font-semibold">
              Smiling Hours African Adventures
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/80">
              Mfumo wa kisasa wa usimamizi wa wageni na safari, uliotengenezwa kwa
              mwonekano wa kifahari na matumizi rahisi.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}