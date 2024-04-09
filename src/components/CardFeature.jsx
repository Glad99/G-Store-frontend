
const CardFeature = (image,name,price) => {
  return (
    <div className="w-full min-w-[200px]">
        <div className='h-20'>
            <img src={image} className='h-full' />
        </div>
    </div>
  )
}

export default CardFeature