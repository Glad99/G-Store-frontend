
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import toast, { Toaster } from 'react-hot-toast';
import NewProduct from './pages/NewProduct';
import { useEffect } from 'react';
import {setDataProduct} from './redux/productSlice'
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';


function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  

  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${import.meta.env.VITE_SERVER_DOMIN}/product`)
      const resData = await res.json()
      console.log(resData);
      dispatch(setDataProduct(resData))
    })()
  }, [])

  console.log(productData);
  return (
    <div>
      <Toaster />
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signup' element={<SignUp/>}
        ></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/newproduct' element={<NewProduct/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App
