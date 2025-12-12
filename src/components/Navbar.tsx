import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/navbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between py-2.5 mb-5 sm:mb-7.5 lg:mb-12.5">
      {open ? (
        <div className="bg-white flex flex-col justify-center items-center absolute w-screen h-screen z-10 top-0 left-0 gap-13.5 dark:bg-slate-900">
          <h2 className="font-semibold text-xl">Your Name</h2>

          <div className="flex flex-col items-center gap-5">
            {navLinks.map((nav, index) => (
              <NavLink key={index} to={nav.path} className="text-xl p-2">
                {nav.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          <span
            className="text-2xl absolute bottom-0 p-8 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <IoClose />
          </span>
        </div>
      ) : (
        <>
          <h2 className="font-semibold text-xl">Your Name</h2>
          <span
            className="text-3xl cursor-pointer sm:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </span>
          <div className="gap-3 hidden sm:flex">
            {navLinks.map((nav, index) => (
              <NavLink key={index} to={nav.path} className="text-xl p-2">
                {nav.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
