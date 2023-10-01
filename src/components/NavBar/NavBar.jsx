"use client";

import Link from "next/link";
import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";


const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/classes",
    title: "Classes",
  },
  {
    path: "/contact",
    title: "Contact Us",
  },
  {
    path: "/about",
    title: "About Us",
  },
];

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className=" bg-orange-600 py-3 text-white ">
        <nav className="flex justify-between items-center w-10/12 mx-auto ">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">
              NEXT <span>GYM</span>
            </h1>
          </Link>
          <ul className="flex items-center space-x-4 font-semibold">
            {navLinks.map(({ path, title }) => (
              <li key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
            
            {/* Using Next-Auth Session display sign in & sign out button */}
            {session?.user ? (
              <>
                <button onClick={() => signOut()} className="bg-white text-orange-500 px-5 py-2 rounded-md">Log Out</button>
              </>
            ) : (
              <button onClick={() => signIn()} className="bg-white text-orange-500 px-5 py-2 rounded-md">Log In</button>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
