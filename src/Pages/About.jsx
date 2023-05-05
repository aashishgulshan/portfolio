import React from 'react'

function About() {
  return (
    <div className=' justify-items-center py-[110px] hover:scale-105 duration-[500ms] ' id='About'>
        <div className='max-w-[1160px] mx-auto'>
          <h1 className='font-bold text-3xl mb-[20px] text-center italic'>ABOUT ME</h1>
            <ul className="grid grid-cols-1 gap-6 bg-white rounded-3xl">
                <li className='items-center m-3 p-4 shadow-2xl rounded-3xl text-3xl  '>Hi I am Aashish Gulshan, living in Nalanda, India. <br /> I am a MCA Student, currently working with awesome folks at Umpteen Innovation. I ❤️ to write code, share ideas, and made bad jokes! 🚀 <br /><br /> Have a look at my skills or just connect with me on LinkedIn. I am always excited to learn new things and technology, lets discuss over coffee.</li>  
            </ul>
        </div>
    </div>

  )
}

export default About