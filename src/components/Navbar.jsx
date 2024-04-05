import { useState } from "react";
import logo from "../assets/G-store logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import {toast} from "react-hot-toast"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Contact us", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/signup" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state)=>state.user)
  console.log(userData.email);
  const dispatch = useDispatch()
const handleShowMenu = ()=>{
  setShowMenu(prev=>!prev)
}

const handleLogout = ()=>{
dispatch(logoutRedux())
toast("Logout successfully!")
}

console.log(import.meta.env.VITE_ADMIN_EMAIL);
  return (
    <header className="flex fixed w-full h-16 md:px-4 shadow-md items-center justify-center bg-white z-50 ">
      <div className="flex items-center h-full gap-12 w-full justify-between p-5">
        <div className="h-12 ">
          <img src={logo} alt="" className=" h-full " />
        </div>
        <div>
          <label className="form-control">
            <select className="select ">
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
        <div className="relative hidden lg:flex">
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
          <div className="text-slate-600" onClick={handleShowMenu}>
          <div className="cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow-md" >
            {userData.image ? <img src={userData.image} className="h-full w-full"/> : <FaUserCircle className="size-8" />}
          </div>
          {showMenu && (
            <div className="absolute right-2 bg-whitepy-2 shadow drop-shadow-md flex flex-col">
              {
                userData.email === import.meta.env.VITE_ADMIN_EMAIL && <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">New Product</Link>
              }
              
              {userData.image ? <p className="cursor-pointer text-white px-2 mb-2 bg-red-500 " onClick={handleLogout}>Logout [{userData.name}]</p> : <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2 ">Login</Link>
            }
            </div>
          )

          }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
