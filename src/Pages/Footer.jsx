import React from 'react';
import { BsFacebook, BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';
import { FaHeart} from 'react-icons/fa';


export default function Footer() {
  return (
    <div className='py-2 bg-gray-800 text-yellow-200 text-center'>
      <a className='hover:text-white hover:text-xl' href="mailto:aashishgulshan@gmail.com">aashishgulshan@gmail.com</a>
      <div className='flex gap-2 justify-center items-center text-2xl p-2'>
        <a className=' text-zinc-50 hover:bg-gray-700 hover:text-yellow-300 hover:scale-125' href="https://www.linkedin.com/in/aashish-gulshan/" target="_blank"><BsLinkedin/></a>
        <a className=' text-zinc-50 hover:bg-gray-700 hover:text-yellow-300 hover:scale-125' href="https://www.facebook.com/IamAsgn37" target="_blank"><BsFacebook/></a>
        <a className=' text-zinc-50 hover:bg-gray-700 hover:text-yellow-300 hover:scale-125' href="https://github.com/IamAsgn37" target="_blank"><BsGithub/></a>
        <a className=' text-zinc-50 hover:bg-gray-700 hover:text-yellow-300 hover:scale-125' href="https://www.instagram.com/aashish_gulshan/" target="_blank"><BsInstagram/></a>
      </div>
      <p>©2023 by Aashish Gulshan. Made with ❤️ in India</p>
    </div>
  )
}
