import React from 'react'

const Navbar = () => {
  return (
<nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
    <div>
        <h3 className="rext-xl font-bold text-gray-600">{new Date().toUTCString().slice(0,16)}</h3>
        <h1 className="text-blue-500 font-serif text-3xl font-bold"> BURGER BAWA</h1>
     </div>
     <div>
        <input type="search" name="search" id="" placeholder="Are You Hungry?"
         autoComplete='off' className='p-4 border border-gray-400 rounded-lg shadow-md outline-none w-full lg:w-[25vw]'/>
     </div>
</nav>
  )
}

export default Navbar
