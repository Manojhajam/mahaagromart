import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-100 h-screen'>
        <div className='flex flex-col items-center justify-center h-70 bg-gradient-to-r from-green-600 to-green-700 text-white mt-4'>
            <h1 className='text-6xl font-bold'>B2B Marketplace</h1>
            <p className='text-lg mt-3'>Discover premium agricultural products and connect with trusted suppliers</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around gap-8 mt-8 p-4'>
            <div className='flex-1 flex flex-col items-center justify-center bg-white text-green-600 shadow-2xl rounded-lg py-6'>
                <h2 className='text-4xl font-bold'>8+</h2>
                <p className='text-lg'>Active Listings</p>
            </div>
            <div className='flex-1 flex flex-col items-center justify-center bg-white text-green-600 shadow-2xl rounded-lg py-6'>
                <h2 className='text-4xl font-bold'>8+</h2>
                <p className='text-lg'>Active Listings</p>
            </div>
            <div className='flex-1 flex flex-col items-center justify-center bg-white text-green-600 shadow-2xl rounded-lg py-6'>
                <h2 className='text-4xl font-bold'>8+</h2>
                <p className='text-lg'>Active Listings</p>
            </div>
        </div>
        
    </div>
  )
}

export default page