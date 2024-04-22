import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='pt-[5rem] P-4'>
        <div >
        <Link to={"/newproduct"}><button className='bg-slate-500 rounded p-1 px-2 text-white hover:bg-slate-700 '>Add Products</button></Link>
        </div>
    </div>
  )
}

export default Dashboard