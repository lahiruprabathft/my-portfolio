import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white overflow-hidden'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
            <div className='pb-8 text-center lg:text-left' >
                <p className='subheading'>Contact</p>
                <p className='py-6'>Submit below form to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center pb-[100px]'>
                <form action="https://getform.io/f/fc767763-cae7-47c8-bc94-7067e06fd751" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder="Enter your name"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="text" name="email"
                     placeholder="Enter your Email"
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="message"
                    placeholder='Enter your message here'
                    id="" cols="" rows="10" 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex 
                    item-center rounded-md hover:scale-110 duration-300'>Get in Touch</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact