import React from 'react'

function About() {
  return (
    <div className='bg-gray-500 justify-items-center h-screen'>
        {/* <h1 className='font-bold md:text-2xl lg:text-3xl text-center italic py-2 bg-gray-800'>ABOUT ME</h1> */}
        <h1 className="flex justify-center items-center md:text-2xl lg:text-3xl font-bold text-yellow-400 bg-gray-900 border-t-2 border-yellow-400 p-2 gap-2">ABOUT ME</h1>

      <div className='max-w-[1260px] mx-auto mt-12'>
        <div className=" bg-gray-700 rounded-2xl border-4 border-yellow-400 m-5 ">
          <p className='px-5 py-10 text-justify sm:text-xl md:text-2xl lg:3xl text-yellow-400 '>
            Hi I am Aashish Gulshan, living in Nalanda, India. I am a MCA Student,
            currently working with awesome folks at <strong>CapitalVia Fintech</strong>. <br/><br/>I ❤️ to write code,
            share ideas, and made bad jokes! 🚀 Have a look at my skills or just connect with me on LinkedIn.
            I am always excited to learn new things and technology, <br/> <br/>lets discuss over coffee... ☕
          </p>  
        </div>
      </div>
    </div>

  )
}

export default About