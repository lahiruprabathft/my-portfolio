import React from 'react'

const Abouts = () => {
  return (
    <div Name='About' className= 'w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-[100px] lg:pt-0' >

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit '>
        <div className='pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

            <p className='text-xl mt-20 '>
            Hello and welcome to my portfolio website! My name is Lahiru Prabath, and I am a front-end developer with a passion for building beautiful, user-friendly websites and web applications.

I have a solid foundation in HTML, CSS, and JavaScript, as well as experience with popular frameworks like Angular and libraries like Tailwind CSS. I enjoy keeping up with the latest web development trends and technologies, and I'm always looking for new ways to enhance my skills and knowledge.
            </p>
        <br/>
            <p className='text-xl mt-10'>
            As a developer, I believe that the key to success is not just technical expertise, but also a strong focus on user experience and design. I strive to create websites and applications that are both functional and visually appealing, with clean, efficient code that's easy to maintain and scale.
<br/>
In my free time, I love experimenting with new technologies and tools, and I'm always working on personal projects to improve my skills and knowledge. When I'm not coding, you can usually find me hiking, reading, or spending time with my family and friends.
<br/>
Thank you for taking the time to visit my portfolio website, and I look forward to working with you on your next project!
            </p>

    </div>

    </div>
   
  )
}

export default Abouts;