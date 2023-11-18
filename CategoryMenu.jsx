import React from 'react'

const CategoryMenu = () => {
  return (
    <div>
    <h3 className='text-xl font font-semibold font-serif'>Find Your Food</h3>
    <div className="my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className="px-10 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white">All</button>
        <button className="px-10 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white">Lunch</button>
        <button className="px-10 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white">Breakfast</button>
        <button className="px-10 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white">Dinner</button>
        <button className="px-10 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white">Snacks</button>
    </div>
    </div>
  )
}

export default CategoryMenu
