import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { useState } from "react";

const NewProduct = () => {
  const [data, setData]= useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : "",
  })

  const handleOnChange = (e)=>{
    const {name, value} = e.target

    setData((prev)=>{
        return{
          ...prev,
          [name] : value
        }
    })

  }

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64((e.target.files[0]))
    // console.log(data);

    setData((prev)=>{
      return{
        ...prev,
        image : data
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data);
  }
  return (
    <div className='pt-[5rem] P-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' className="bg-slate-200 p-1 my-1" onChange={handleOnChange} />
        <label htmlFor="category">Category</label>
        <select className="bg-slate-200 p-1 my-1" id="category" name="category" onChange={handleOnChange}>
              <option>Women's Fashion</option>
              <option>Men's</option>
              <option>Electronics</option>
              <option>Homes & Lifestyle</option>
              <option>Health & Beauty</option>
              <option>Kids</option>
            </select>

            <label htmlFor="image">Image
            <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
              {
                data.image ? <img src={data.image} className="h-full" /> :<span className="text-5xl "><BsCloudUpload /></span>
              }
              
              <input type={"file"} accept="image/*" id="image" name="name" onChange={uploadImage} className="hidden" />
            </div>
            </label>

            <label htmlFor="price" className="my-1">Price</label>
            <input type="text" className="bg-slate-200 p-1 my-1" name="price" onChange={handleOnChange} />

            <label htmlFor="description">Description</label>
            <textarea rows={2} className="bg-slate-200 p-1 my-1 resize-none" name="description" onChange={handleOnChange}></textarea>

            <button className="bg-[#d96846] hover:bg-[#ec4b1a] text-white text-lg font-medium my-2 drop-shadow">Save</button>
      </form>
    </div>
  )
}

export default NewProduct