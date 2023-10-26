"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import GiphySearch from "./giphy/page";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  // Check if the session exists, and if so, redirect to '/giphy/page'
  if (session) {
    return <GiphySearch />;
  }

  // return (
  //   <div className="p-8">
  //     {/* <div className='text-white'>{session?.data?.user?.email}</div> */}
  //     <button className="text-white" onClick={() => signOut()}>
  //       Logout
  //     </button>
  //   </div>
  // );
}

Home.requireAuth = true;
