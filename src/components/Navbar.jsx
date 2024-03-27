import { useState } from "react";
import logo from "../assets/G-store logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Contact us", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/signup" },
];

const Navbar = () => {
  return (
    <header className="flex fixed w-full h-16 md:px-4 shadow-md items-center justify-center bg-white z-50 ">
      <div className="flex items-center h-full gap-12 w-full justify-between p-5">
        <div className="h-12 ">
          <img src={logo} alt="" className=" h-full " />
        </div>
        <div>
          <label className="form-control">
            <select className="select select-bordered ">
              <option disabled>Categories</option>
              <option>Women's Fashion</option>
              <option>Men's</option>
              <option>Electronics</option>
              <option>Homes & Lifestyle</option>
              <option>Health & Beauty</option>
              <option>Kids</option>
            </select>
          </label>
        </div>
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-12  text-[gray] text-[15px] font-[500]">
          {navItems.map((nav, idx) => (
            <li key={idx} style={{ marginLeft: "20px" }}>
              <Link
                style={{ textDecoration: "none", color: "grey" }}
                to={nav.path}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search here"
            className="border-b border-2 p-1 rounded "
          />
          <IoSearchOutline className="absolute top-2 right-1" />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <div className="flex items-center gap-[45px] size-7 relative">
            <img src={cart_icon} alt="" />
            <div className="size-[15px] bottom-4 left-4 flex justify-center items-center bg-red-500 rounded-3xl text-white absolute ">
              0
            </div>
          </div>
          <FaUserCircle className="size-8" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
