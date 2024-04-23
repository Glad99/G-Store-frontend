import { FaMinus, FaPlus } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCartItem, increaseQty, decreaseQty } from "../redux/productSlice";

const CartProduct = ({id,name,image,category,qty,total, price}) => {
  const dispatch = useDispatch()
  return (
    <div className='bg-slate-200 p-2 flex gap-4 rounded border border-slate-300'>
      <div className='bg-white p-3 rounded overflow-hidden '>
        <img src={image} alt={name} className='h-28 w-24 object-cover '/>
      </div>
      <div className="flex flex-col gap-1 w-[15rem]  ">
      <div className="flex justify-between">
        <h3 className=" font-semiblod text-slate-600 capitalize text-lg md:text-xl mt-4 whitespace-nowrap overflow-hidden ">{name}</h3>
        <div className="cursor-pointer text-slate-500 hover:text-red-500 " onClick={()=>dispatch(deleteCartItem(id))}>
        <AiFillDelete /></div>
        </div>
        <p className=" font-medium text-slate-500 capitalize">{category}</p>
        <p className=" font-bold text-slate-500"><span>₦</span>{price}</p>
        <div>
          <div className="flex gap-3">
        <button className="bg-slate-300 text-white py-1 mt-2 p-1  rounded hover:bg-slate-400"onClick={()=>dispatch(increaseQty(id))}><FaPlus /></button>
        <p className="font-semibold p-1">{qty}</p>
        <button onClick={()=>dispatch(decreaseQty(id))} className="bg-slate-300 text-white py-1 mt-2 rounded hover:bg-slate-400 p-1"><FaMinus /></button>
          </div>
          <div className="flex items-center gap-2 font-bold ">
            <p>Total:</p>
            <p><span>₦</span>{total}</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CartProduct