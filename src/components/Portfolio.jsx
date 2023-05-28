import React from 'react';
import Hotelweb from '../assets/Hotelweb.PNG'
import Clearcash from '../assets/Clearcash.png'
import navbar from '../assets/navbar.jpg'
import reactParallax from '../assets/reactParallax.jpg'
import reactSmooth from '../assets/reactSmooth.jpg'
import reactWeather from '../assets/reactWeather.jpg'

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src:Hotelweb
        },
        {
            id:2,
            src:Clearcash
        },
        {
            id:3,
            src:navbar
        },
        {
            id:4,
            src:reactSmooth
        },
        {
            id:5,
            src:reactParallax
        },
        {
            id:6,
            src:reactWeather
        },
    ]

  return (
    <div name="" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-[720px] lg:pt-0'>
        
        <div className='max-w-screen-lg p-4 mx-auto
         flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center lg:text-left'> 
                <p className='subheading'>Portfolio</p>
                <p className='py-6'>Check Out My works</p>
            </div>

          

            <div className='grid sm:grid-col-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map (({id,src}) =>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='w-[310px] h-[190px] rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center '> 
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                    
                ))
            }


          
            </div>
        </div>

    </div>
  )
}

export default Portfolio;