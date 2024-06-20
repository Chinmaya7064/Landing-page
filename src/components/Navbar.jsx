import React, { useState } from "react";
import logo from "../assets/logo.png";
import lock from "../assets/lock.svg";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b fixed z-10">
      <div className="md:max-w-[1180px] max-w-[400px] m-auto h-full w-full flex justify-between items-center">
        <img src={logo} className="h-[50px]" />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-12 cursor-pointer ">
            <li className="hover:text-green-500">Home</li>
            <li className="hover:text-green-500">About</li>
            <li className="hover:text-green-500">Support</li>
            <li className="hover:text-green-500">Platform</li>
            <li className="hover:text-green-500">Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2">
            <img src={lock} />
            Login
          </button>
          <button className="px-8 py-3 rounded-md  bg-[#45bdc5] text-white font-bold hover:bg-[#2ed39f]">
            Sign Up for free
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div>
        <ul
          className={
            toggle
              ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden"
              : "hidden"
          }
        >
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>

          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[#45bdc5] flex justify-center items-center bg-transparent px-6 gap-2 py-4">
              <img src={lock} />
              Login
            </button>
            <button className="px-8 py-5 rounded-md  bg-[#45bdc5] text-white font-bold">
              Sign Up for free
            </button>
          </div>

        </ul>
        
      </div>
    </div>
  );
}

export default Navbar;
