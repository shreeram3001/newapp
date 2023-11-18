import React from 'react'
import {AiFillStar} from "react-icons/ai"
import { useDispatch } from 'react-redux';
import{addToCart} from "../redux/slices/CartSlice";

const foodcart = ({id, name, img, price, desc, rating}) => {
  const dispatch = useDispatch();
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex-col gap-2 rounded-lg gap-2'>
        <img src={img}
        alt='' className=" w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 easy-in-out" />
        <div className="text-sm flex justify-between" >
            <h2>{name}</h2> 
            <span className="text-green-500">₹{price}</span>
        </div>

        <p className='text-sm font-normal'>{desc.slice(0,50)}</p>
        <div className="flex justify-between">
            <span className='flex justify-center items-center'>
                <AiFillStar className="mr-1 text-yellow-500"/>{rating}

            </span>
            <button onClick={()=>{
            dispatch(addToCart({id,name,rating, price,img, qty:1}));
          }} 
            className="p-3 text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm m-50px"> Add to cart</button>
        </div>
      
    </div>
  )
}

export default foodcart
