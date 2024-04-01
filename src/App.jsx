
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import toast, { Toaster } from 'react-hot-toast';
import NewProduct from './pages/NewProduct';

function App() {

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
        <Route path='/newproduct' element={<NewProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App
