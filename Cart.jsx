import React from 'react'
import { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import {TfiFaceSad} from "react-icons/tfi"
import Itemcart from './Itemcart';
import {useSelector} from "react-redux";
import {FaShoppingCart} from "react-icons/fa"



const Cart = () => {
  const [activeCart,setActiveCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty,item) => totalQty+item.Qty,0);
  
  return  (
   <>
  
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5  bg-white 
      ${activeCart? "translate-x-0" : "translate-x-full"} transition-all duration-500`}>
       
        <div className='flex justify-between item-center my-3 '>
            <span className="text-2xl font-bold text-gray-800"> My Order</span>
            <IoMdCloseCircle onClick={() =>setActiveCart(!activeCart)}
              className="text-3xl hover:border-green-500 hover:text-red-500 cursor-pointer"/>

        </div>

        
        { cartItems.length> 0 ? cartItems.map((food)=>{
            return  (
           <Itemcart 
           key = {food.id}
           id={food.id} 
           name={food.name}
           price={food.price}
           img={food.img}
           qty={food.qty} /> 
           ) })
           :<h2 className='text-xl text-center font-bold'>Your cart is empty </h2>  }
           <TfiFaceSad className='text-2xl text-yellow-500 mr-10 hover:bg-black rounded-md'/>
       
       
       


        <div className="absolute bottom-0">
        <h3 className="font-semibold text-gray-800">Items :{totalQty}</h3>
        <h3 className="font-semibold text-gray-800 mb-3">Total Amount:</h3>
        <hr className='w-[90vw] lg:w-[18vw]'/>
        <button className="bg-green-400 font-bold px-3 text-white 
        py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5 hover:bg-green-800 ">Chackout</button>
    </div>

     
      
    </div>

    <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} 
    className={`text-5xl bg-white shadow-md p-3 fixed bottom-4 right-4
     hover:bg-yellow-500 rounded-full bg-contain ${totalQty > 1 && "animate-bounce delay-500 transition-all"}`}/> 
   
 
 </>
  )
  
}

export default Cart
