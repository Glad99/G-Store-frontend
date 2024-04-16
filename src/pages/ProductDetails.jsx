import { useNavigate, useParams } from "react-router-dom"
import productData from "../pages/Home"
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const navigate = useNavigate();
  const {productId} = useParams();

  const productData = useSelector((state) =>state.product.productList)
  console.log(productData)

  const productDisplay = productData.filter((el)=> el._id === productId)[0]
  console.log(productDisplay);

    const handlebuy = ()=> {
      alert(`Purchased succeful ${el.name}`)
    }
  return (
    <div className="pt-[100px]">
    <div className="w-full max-w-4xl bg-slate-400 m-auto p-2 md:p-4 md:flex">
      <div className="shadow overflow-hidden">
        <img src={productDisplay.image} className="h-[20rem]" />
      </div>
      <div className="bg-red-400 w-[15rem]  ">
        <h3 className=" font-semiblod text-slate-600 capitalize text-2xl mt-4 whitespace-nowrap overflow-hidden ">{productDisplay.name}</h3>
        <p className=" font-medium text-slate-500 capitalize">{productDisplay.category}</p>
        <p className=" font-bold text-slate-500">{productDisplay.price}</p>
        <div className="flex gap-3">
        <button className="bg-slate-950 text-white py-1 mt-3 w-full mb-3 rounded hover:bg-slate-800">Buy</button>
        <button className="bg-slate-950 text-white py-1 mt-3 w-full mb-3 rounded hover:bg-slate-800">Add To Cart</button>
        </div>
        <div>
        <p>{productDisplay.description}</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ProductDetails
