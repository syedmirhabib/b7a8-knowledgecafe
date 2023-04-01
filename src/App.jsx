import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import SideCart from './components/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questions from './components/Questions/Questions';




const App = () => {


  const [time, setTime] = useState(0)
  // function for sideCart read time 
  const handleReadTime = (readTime) => setTime(time + readTime)




  const [cart, setCart] = useState([]);
  // function for sideCart Bookmark 
  const handelSideCart = (cards) => {
    const exist = cart.find(item => item._id === cards._id)
    if (exist) {
      toast.error('Blog already bookmarked', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setCart(cart)
    }
    else {
      toast.success('Blog bookmarked', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setCart([...cart, cards])
    }
  }


  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>

      <hr className=' border mx-auto mt-5' />

      <div className='md:grid grid-cols-12 md:p-16 p-6 gap-20'>
        <div className='col-span-8'>
          <Cards handelSideCart={handelSideCart} handleReadTime={handleReadTime}></Cards>
        </div>
        <div className='col-span-4'>
          <SideCart cart={cart} readTime={time}></SideCart>
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <Questions></Questions>
    </div>
  );
};

export default App;