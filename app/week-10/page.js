"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return (
      <div className="mt-56 p-5 m-auto max-w-fit">
        <p className="">Please Log In With GitHub To Continue</p>
        <div className="p-5 m-auto max-w-fit">
        <button onClick={handleSignIn} className="bg-black border-2 border-white rounded text-white hover:bg-green-500 
                            hover:scale-110 transition duration-200 ease-in-out">Sign in with GitHub</button>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="mt-56 m-auto max-w-fit content-center">
        <p className="p-5 font-bold">
          Welcome, {user.displayName} ({user.email})
        </p>
        <p className="hover:underline hover:text-lime-500 m-auto max-w-fit">
          <Link href="./week-10/shopping-list">Shopping List</Link>
        </p>
        <div className="p-5 m-auto max-w-fit">
            <button onClick={handleSignOut} className="px-3 bg-black border-2 border-white rounded text-white hover:bg-red-500 
                            hover:scale-110 transition duration-200 ease-in-out">Sign Out</button>
        </div>
      </div>
    </main>
  );
};

export default Page;
