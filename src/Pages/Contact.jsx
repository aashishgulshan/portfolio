// import { ClassNames } from '@emotion/react';
import img1 from '../assets/contact.gif';
import React, { useState } from 'react';
import {FaTelegramPlane,FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import {RiContactsLine} from 'react-icons/ri';
import {TbPhoneCall} from 'react-icons/tb';
import {SiMinutemailer} from 'react-icons/si';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to submit the form
  };

  return (
    <div className='bg-gray-500'>
      <h1 className="flex justify-center items-center text-3xl font-bold text-yellow-400 bg-gray-900 border-t-2 border-yellow-400 p-2 gap-2">Contact Me <RiContactsLine/></h1>

      <div className='flex flex-wrap justify-center container items-center gap-5'>
            <div className='m-10 rounded-lg border-4 border-yellow-400 text-white bg-gray-700'>
                <img className=' rounded-tr-full' src={img1} alt="" />
                <div className='ml-5 pt-5'>
                    <a className='text-lg text-yellow-400 font-bold inline-flex gap-2'><TbPhoneCall/>+91-727967719</a>
                    <br />
                    <a className='text-lg text-yellow-400 font-bold mb-5 ' target='_blank' href="https://www.linkedin.com/in/aashish-gulshan/"><p className='inline-flex gap-2'><FaLinkedinIn/>@aashish-gulshan</p></a>
                    <br />
                    <a className='text-lg text-yellow-400 font-bold mb-5 ' href="mailto:aashishgulshan@gmail.com"><p className='inline-flex gap-2'><SiMinutemailer/>aashishgulshan@gmail.com</p></a>
                    <br/>
                    <a className='text-lg text-yellow-400 font-bold mb-5 ' target='_blank' href="https://twitter.com/aashishgulshan"><p className='inline-flex gap-2'><FaTwitter/>@aashish-gulshan</p></a>

                </div>
                <button type="submit" className="bg-gray-500 m-3 hiver:ring-offset-2 ring ring-yellow-500 hover:bg-yellow-400 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Download CV</button>
            {/* <button className="ring ring-yellow-500 bg-gray-700 font-bold p-2 m-3 rounded">Download CV</button> */}
            </div>

        
        {/* Here form section */}
            <div className="border-4 rounded-xl border-yellow-400 sm: mb-5">
            <form onSubmit={handleSubmit} className="bg-gray-700 p-10 rounded-lg shadow-md">
                <h1 className="text-2xl text-yellow-400 font-bold mb-5 inline-flex gap-2">Send Message... <FaTelegramPlane/></h1>
                <div className="mb-4">
                <label htmlFor="name" className="block text-yellow-400 font-bold mb-2">
                    Name
                </label>
                <input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    id="name"
                    className="shadow appearance-none border-2 border-yellow-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.name}
                    onChange={handleChange}
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-yellow-400 font-bold mb-2">
                    Email
                </label>
                <input
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    id="email"
                    className="shadow appearance-none border-2 border-yellow-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-yellow-400 font-bold mb-2">
                    Message
                </label>
                <textarea
                    placeholder="Your Message"
                    name="message"
                    id="message"
                    rows="5"
                    className="shadow appearance-none border-2 border-yellow-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.message}
                    onChange={handleChange}
                />
                </div>
                <button type="submit" className="bg-gray-500 hiver:ring-offset-2 ring ring-yellow-500 hover:bg-yellow-400 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
            </div>
        </div>
    </div>
    
    
  );
}

export default Contact;
