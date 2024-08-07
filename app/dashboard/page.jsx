"use client";
import { Logout } from "@/actions/authServer";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const [user, setUser] = useState();

  const router = useRouter();

  const fetchUser = async () => {
    const user = auth.currentUser;
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
      <div>
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-14 absolute top-5 left-5"
          />
          <img
            src="/name.png"
            alt="Electrical Consulting"
            className="h-8 absolute top-9 left-20"
          />
          <form action={Logout}>
            <button className=" absolute rounded bg-gray-900 px-3 py-3 text-lg font-medium top-9 right-20 text-orange-500 shadow-lg hover:bg-orange-700" type="submit">Log-Out</button>
          </form>
        </div>
        <div className="flex flex-col gap-5 text-center justify-center align-middle items-center mt-40 w-3/4 mx-auto font-bold text-4xl">
          Hello welcome to venus canada {auth.currentUser?.displayName}
          <Link
            href="/booking/pages"
            className="w-10 rounded bg-gray-900 px-3 py-3 text-lg font-medium text-orange-500 shadow-lg hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
          >
            Book an appointment
          </Link>
        </div>
      </div>
       ) : (
        // router.push('/')
        <div className="flex flex-col">Not Logged in
          <Link href="/sign-in">
          Go to Login Page
          </Link>
        </div>
      )}
    </div>
  );
}

export default page;
