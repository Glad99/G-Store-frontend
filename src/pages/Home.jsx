import {Link} from "react-router-dom"
import { MdOutlineLocalOffer } from "react-icons/md";

const Home = () => {
  return (
    <div className=' flex  justify-center items-center'>
      <div className="flex gap-5  w-full h-screen px-20 bg-slate-50 justify-center items-center pt-10  ">
        <div className="relative container  ">
          <h2 className="text-2xl lg:text-4xl font-bold max-w-[35rem] ">Explore High-Quality <span className="text-[#d96846] ">Products Flawless</span> Shopping Experience</h2>
          <p className="text-gray-900 tracking-wide my-10 max-w-[33rem] text-l font-medium  ">Welcome to G-Store, your go-to for premium products. Dive into our curated selection of high-quality items across categories like electronics and fashion. Enjoy easy shopping with our intuitive interface and secure checkout. Elevate your online experience with us!</p>
          <div className="flex gap-5">
          <Link to={'/'} className="bg-slate-800   text-white rounded-full p-2 font-medium px-5 flex items-center">Shop Now</Link>
          <Link to={'/'} className="bg-slate-200 text-gray-700 font-medium  rounded-full pl-5 flex items-center gap-5 ">Offers <MdOutlineLocalOffer className="text-xl bg-[#d96846] rounded-full h-12 w-12 p-3 rotate-90 border border-dashed transition-all duration-500 group-hover:rotate-45"/></Link>

        </div>
        </div>
        <div className=" ">
        <img src="/cart_home.jpg" alt="" className="hidden md:flex md:w-[20rem] lg:flex lg:w-[30rem] transform scale-x-[-1] " />
        </div>
      </div>
    </div>
  )
}

export default Home