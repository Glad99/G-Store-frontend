import React from 'react'
import { Link } from 'react-router-dom'
import CardFeature from '../../components/CardFeature';
import ProductLists from './ProductLists';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
    
    const loadingArrayFeature = new Array(10).fill(null);
  return (
    <div className='pt-[5rem] P-4'>
        <div className='flex gap-2' >
        <Link to={"/newproduct"}><button className='bg-slate-500 rounded p-1 px-2 text-white hover:bg-slate-700 '>Add Products</button></Link>
        <Link to={"/productlist"} className='bg-slate-500 rounded p-1 px-2 text-white hover:bg-slate-700 '>All Products</Link>
        </div>
        
    </div>
  )
}

export default Dashboard