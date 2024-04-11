
const CardFeature = ({image,name,price, loading}) => {
  return (
    <div className="w-full min-w-[200px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor-pointer flex flex-col">
      {
        image ? <>
        <div className='flex flex-col justify-center item-center w-full'>
            <img src={image} className='h-[11rem]'/>
        </div>
        <h3 className=" font-semiblod text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden ">{name}</h3>
        <p className=" font-bold text-slate-500">{price}</p>
        <button className="bg-slate-950 text-white py-1 mt-2 w-full mb-5 rounded">Add To Cart</button></>
        :
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      }
        
    </div>
  )
}

export default CardFeature