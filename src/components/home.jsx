import React from 'react';
// import HeroImage from "../assets/hero.jpg"
import{BsFillArrowRightCircleFill} from "react-icons/bs";
import {Link} from 'react-scroll'
// import robotimg from '../assets/robot.png'
import DNA from './dna'


const home = () => {
  return (
    <div name="Home" className="h-screen w-full  bg-gradient-to-b  from-black via-black to-gray-800 max-md:w-full ">
      <div className="max-w-screen-lg mx-auto animate flex flex-col items-center justify-center h-full px-4 md:flex-row
      ">
        <div className='flex flex-col justify-center h-full w-[60%] max-md:w-full max-md:text-center'>
          <h1 className='text-white text-5xl max-md:mt-[150px] max-md:text-2xl space-y-5 '>Hello, My name is &nbsp;
                      
                      <span className='text-yellow-600 font-bold fades'>L</span>
                      <span className='text-yellow-600 font-bold fades'>A</span>
                      <span className='text-yellow-600 font-bold fades'>H</span>
                      <span className='text-yellow-600 font-bold fades'>I</span>
                      <span className='text-yellow-600 font-bold fades'>R</span>
                      <span className='text-yellow-600 font-bold fades'>U</span>
                    
          
          </h1>
          <h2 className="text-left font-semibold text-white text-md my-1 max-md:text-center slide">I am a Front-End Developer +  IT Tech Support Specialist </h2>
          <p className='text-gray-500 py-4  max-w-md text-justify sm:text-left' > Hello and welcome to my portfolio website! My name is Lahiru Prabath, and I am a front-end developer with a passion for building beautiful, user-friendly websites and web applications.</p>
          <div className="m-0">
            <Link to='Portfolio' className=" group text-white w-fit px-6 py-3 my-6 mt-6 flex items-center justify-center m-auto  sm:m-0 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio 
              <span className="group-hover:rotate-90 duration-300 size={25} ml-1 " >
              <BsFillArrowRightCircleFill/>
              </span>
               </Link>
          </div>


       
        </div>
     
          <div className=' pb-9 pt-2 mb-2 sm:pt-6 w-[40%] h-[90vh] mt-[100px] overflow-hidden z-0 max-md:w-full max-md:h-fit max-md:mt-0'  >
    {/* DNA */}
              <DNA />

     </div>
     
     
      </div>

    </div>
  )
}

export default home