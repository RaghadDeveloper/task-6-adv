import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between py-2.5 mb-5 sm:mb-7.5 lg:mb-12.5">
      {open ? (
        <div className="bg-white flex flex-col justify-center items-center absolute w-screen h-screen z-10 top-0 left-0 gap-13.5">
          <h2 className="font-semibold text-xl">Your Name</h2>

          <div className="flex flex-col items-center gap-5">
            <NavLink to="/" className="text-xl p-2">
              Blog
            </NavLink>
            <NavLink to="/" className="text-xl p-2">
              Projects
            </NavLink>
            <NavLink to="/" className="text-xl p-2">
              About
            </NavLink>
            <NavLink to="/" className="text-xl p-2">
              Newsletter
            </NavLink>
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
            <NavLink to="/" className="text-xl p-2">
              Blog
            </NavLink>
            <NavLink to="/" className="text-xl p-2">
              Projects
            </NavLink>
            <NavLink to="/" className="text-xl p-2">
              About
            </NavLink>
            <NavLink to="/" className="text-xl p-2">
              Newsletter
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
