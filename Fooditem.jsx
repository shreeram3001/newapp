import React from 'react'
import Foodcart from './Foodcart'
import FoodData from '../Data/FoodData.js'



const Fooditem = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center mx-6 my-10'>
      {  FoodData.map((food) => {
         return ( <Foodcart 
           key={food.id} 
           id={food.id}
           name={food.name}
           price={food.price}
           desc={food.desc}
           rating={food.rating}
           img={food.img}/>
        );
    }
        )
}
</div>
      
    
  );
};

export default Fooditem
