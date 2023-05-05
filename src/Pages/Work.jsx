import React from 'react'

function Work() {
  return (
    <div className='min-h-screen bg-gray-500'>
        <h1 className="flex justify-center items-center md:text-2xl lg:text-3xl font-bold text-yellow-400 bg-gray-900 border-t-2 border-yellow-400 p-2 gap-2">WORK EXPERIENCE AND PROJECTS</h1>
        <div className='max-w-[1160px] mx-auto my-10 p-2 md:grid grid-cols-3 shadow-2xl rounded-xl bg-white'>
          <div className=' col-span-1 md:w-[80%] text-center'>
            {/* <img src={Evm_Project} alt=""className='p-2 shadow-xl h-[200px] rounded-2xl shadow-fuchsia-400 inline' />  */}
          </div>
          <div className=' col-span-2 flex flex-col justify-center'>
            <h1 className=' text-fuchsia-500 font-mono font-bold text-xl m-2'>NewsVia-API</h1>
            <p className='my-2 text-justify'>
              <ul className='list-disc'>
                <li>Developed a responsible website to get updated news reated to all categories in india.</li>
                <li>We designed multiple modules for user convenience as well as for admin.</li>
                <li>Generate a unique ID for every voter at the time of registration and store voter details in the Voter list.</li>
                <li>Worked smoothly on every activity of the election similar to the voting machine at the time of voting.</li>
              </ul>
            </p>
            <div className='py-5 text-yellow-500 font-bold'>
              <a href="https://github.com/IamAsgn37/NewsVia-API" target={'_blank'} className='shadow-xl py-3 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900'>Github REPO</a>
              <a href="https://news-via-api.vercel.app/" target={'_blank'} className='shadow-xl ml-5 py-3 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900'>Live</a>        
            </div>
          </div>
        </div>

        <div className='max-w-[1160px] mx-auto my-10 p-2 md:grid grid-cols-3 shadow-2xl rounded-xl bg-white'>
          <div className=' col-span-1 md:w-[80%] text-center'>
            {/* <img src={Evm_Project} alt=""className='p-2 shadow-xl h-[200px] rounded-2xl shadow-fuchsia-400 inline' />  */}
          </div>
          <div className=' col-span-2 flex flex-col justify-center'>
            <h1 className=' text-fuchsia-500 font-mono font-bold text-xl m-2'>Electronic Voting Machine</h1>
            <p className='my-2 text-justify'>
              <ul className='list-disc'>
                <li>Developed a virtual Electronic Voting Machine desktop application using Python and MySQL.</li>
                <li>We designed multiple modules for user convenience as well as for admin.</li>
                <li>Generate a unique ID for every voter at the time of registration and store voter details in the Voter list.</li>
                <li>Worked smoothly on every activity of the election similar to the voting machine at the time of voting.</li>
              </ul>
            </p>
            <div className='py-5 text-yellow-500 font-bold'>
              <a href="https://github.com/IamAsgn37/EVM_Project_Python" target={'_blank'} className='shadow-xl py-3 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900'>Github REPO</a>
              <a href="https://github.com/IamAsgn37/EVM_Project_Python" target={'_blank'} className='shadow-xl ml-5 py-3 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900'>Live</a>        
            </div>
          </div>
        </div>

        <div className='max-w-[1160px] mx-auto my-10 p-2 md:grid grid-cols-3 shadow-2xl rounded-xl bg-white'>
          <div className=' col-span-1 md:w-[80%] text-center'>
            {/* <img src={Evm_Project} alt=""className='p-2 shadow-xl h-[200px] rounded-2xl shadow-fuchsia-400 inline' />  */}
          </div>

          <div className=' col-span-2 flex flex-col justify-center'>
            <h1 className=' text-fuchsia-500 font-mono font-bold text-xl m-2'>Bank Management System</h1>
            <p className='my-2 text-justify'>
              <ul className='list-disc'>
                <li>Developed this project in C++ programming language and used file handling for the database.</li>
                <li>Capable to opening different types of accounts as per the user demand like Saving, Current, FD, etc.</li>
                <li>It has the functionality to credit, debit, passbook, and many more features for customers.</li>
              </ul>
            </p>
            <div className='py-5 text-yellow-500 font-bold'>
              <a href="https://github.com/IamAsgn37/C-With-class-Programming/blob/main/SBI.CPP" target={'_blank'} className='shadow-xl py-3 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900'>Github REPO</a>
              {/* <a href="https://github.com/IamAsgn37/EVM_Project_Python" target={'_blank'} className='shadow-xl ml-5 py-3 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900'>Live</a>         */}
            </div>
          </div>
        </div>

    </div>
  )
}

export default Work