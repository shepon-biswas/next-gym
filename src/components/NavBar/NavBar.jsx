import Link from "next/link";
import React from "react";

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
  return (
    <>
      <div className=" bg-orange-500 py-3 ">
        <nav className="flex justify-between items-center w-10/12 mx-auto ">
          <Link href={'/'}>
          <h1 className="text-2xl font-bold">
            NEXT <span>GYM</span>
          </h1>
          </Link>
          <ul className="flex space-x-4 font-semibold">
            {navLinks.map(({ path, title }) => (
              <li key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
