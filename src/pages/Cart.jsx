import {useSelector} from 'react-redux'
import CartProduct from './CartProduct';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalPayment from '../components/PayPalPayment';


const Cart = () => {
    const productCartItem = useSelector((state)=>state.product.cartItem)
    console.log(productCartItem);

    const totalPrice = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.total), 0)
    const totalQty = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.qty), 0)
  return (
    <>
    <div className='pt-20 px-2 md:px-4'>
        <h2 className='text-lg md:text-xl font-bold text-slate-600'>Your Cart Items</h2>
        {productCartItem[0] ?
        <div className='my-4'>
        {/* display cart items */}
            <div className='w-full max-w-3xl'>
                {
                    productCartItem.map((el)=>{
                        return(
                            <CartProduct key={el._id}
                            id={el._id}
                            name={el.name}
                            image={el.image}
                            category={el.category}
                            qty={el.qty}
                            total={el.total}
                            price={el.price}/>
                        )
                    })
                }
            </div>
            <div className='flex justify-between mr-[5rem] bg-slate-200'>
                <div>
                    Clear Cart
                </div>

            {/* total cart item */}
            <div className='w-full'>
            <div className='w-full max-w-md bg-slate-500'>
                <h2>Summary</h2>
                <div className='flex w-full py-2 text-lg border-b '>
                    <p>Total Qty</p>
                    <p className='ml-auto w-32 font-bold'>{totalQty}</p>
                </div>
                <div className='flex  w-full py-2 text-lg border-b'>
                    <p>Total Price</p>
                    <p className='ml-auto w-32 font-bold'><span>₦</span>{totalPrice}</p>
                </div>
                <button className='bg-[#d96846] text-white py-2 w-full'>Payment</button>
            </div>
            <PayPalPayment/>
            </div>
            </div>
        </div>
        :
        <div className='flex justify-center items-center flex-col'>
            <img src={"Animation - 1713885971677.gif"} alt="" className='w-full max-w-sm'/>
            <p className='text-slate-500 text-3xl font-bold'>Empty Cart</p>
        </div>
        }
        
    </div>
    </>
  )
}

export default Cart