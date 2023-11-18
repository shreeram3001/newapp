import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import {useDispatch} from "react-redux";
import {removeFromCart,decrementQty,incrementQty,} from "../redux/slices/CartSlice";

const Itemcart = ({id, name, img, price, qty}) => {

const dispatch = useDispatch();

  return (
    <div className="flex gap-3 shadow-md rounded-md p-2 mb-3">

        <MdDelete onClick={() => dispatch(removeFromCart({id,name,price,img,qty}))} className='absolute right-7 cursor-pointer text-gray-600 hover:text-red-600 text-xl'/>
      <img src={img}
      alt="" className="w-[70px] h-[70px]"/>
      <div className='leading-5'>
        <h2 className='font-bold text-gray-900'>{name}</h2>
        <div className='flex'>
            <span className='text-green-500 font-bold'>{price}</span>
            <div className='flex justify-content items-center gap-2 absolute right-7 mb-4'>
            
           
           <AiOutlineMinus onClick={() =>
           qty >=s1 ? dispatch(decrementQty({id})) : (qty = 1)} 
            className='border-2 border-gray-900 text-gray-600 hover:text-white hover:bg-green-500 text-xl m-2 transition-all ease-linear cursor-pointer'/>
           <span>{qty}</span>
           <AiOutlinePlus onClick={()=>qty>-1 ? dispatch(incrementQty({id})):(qty=0)}
            className='border-2 border-gray-900 text-gray-600 hover:text-white hover:bg-green-500 text-xl m-2 transition-all ease-linear cursor-pointer '/> 
        </div>
        </div>
      </div>
    </div>
  )
}

export default Itemcart
