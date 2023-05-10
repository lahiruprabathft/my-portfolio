import React from 'react'
import Heroimage from '../assets/hero.jpg'

const Abouts = () => {
  return (
    <div Name='About' className= 'w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-[50px] lg:pt-0' >

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit '>
        <div className='pb-2 text-center lg:text-left'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <div className='sm:flex '> 
            <div className='w-full mx-4 sm:w-1/2 '>
                  <img src={Heroimage} alt=""  className='w-[300px] my-[80px]  border-4 border-cyan-400 hover:border-yellow-300 duration-200 shadow-yellow-400 '/>
            </div>
            <div className='w-full text-justify px-2  sm:w-1/2'>
            <p className='text-md mt-10 '>
            Hello and welcome to my portfolio website! My name is Lahiru Prabath, and I am a front-end developer with a passion for building beautiful, user-friendly websites and web applications.

I have a solid foundation in HTML, CSS, and JavaScript, as well as experience with popular frameworks like React and libraries like Tailwind CSS. I enjoy keeping up with the latest web development trends and technologies, and I'm always looking for new ways to enhance my skills and knowledge.
            </p>
        <br/>
            <p className='text-md mt-6'>
            As a developer, I believe that the key to success is not just technical expertise, but also a strong focus on user experience and design. I strive to create websites and applications that are both functional and visually appealing, with clean, efficient code that's easy to maintain and scale.
<br/>
In my free time, I love experimenting with new technologies and tools, and I'm always working on personal projects to improve my skills and knowledge. When I'm not coding, you can usually find me hiking, reading, or spending time with my family and friends.
<br/>
Thank you for taking the time to visit my portfolio website, and I look forward to working with you on your next project!
            </p>

            </div>

        </div>

          
    </div>

    </div>
   
  )
}

export default Abouts;