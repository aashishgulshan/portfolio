import React from 'react'

function Error() {
  return (
    <div className=' min-h-screen'>
        <div className='grid grid-cols-2 p-5'>
            <div className='my-auto mx-auto font-sans text-center font-bold'>
                <h1 className='text-6xl text-orange-600'>OOPS!</h1>
                <p className='text-3xl py-2'>We can't seem to find what you're looking for.</p>
                <p className='py-2 text-xl'>Error Code: '404'</p>
                <a className='bg-orange-600 text-white text-xl py-2 px-3 my-2 hover:underline' href='https://aashish-gulshan.netlify.app'>Homepage</a>

            </div>
            <img className=' w-80 my-auto ' src="https://images.marketpath.com/9dda7041-2870-4a96-bf1e-dd8342e86e7c/image/90696861-1678-4da4-8b42-464105849f4a/errorpages-01.svg" alt=" " />

        </div>
    </div>
  )
}

export default Error;