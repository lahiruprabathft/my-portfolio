import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimg from '../assets/react.png'
// import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
// import graphql from '../assets/graphql.png'
import tailwind from '../assets/tailwind.png'
import React from 'react';

const Experience = ({ children }) => {
  
  
    return (
      <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen sm:px-6'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
          <div className='text-center lg:text-left'>
            <p className='subheading'>Skills</p>
            <p className='py-6'>My Experience are as follows:</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-7 px-12 max-md:px-1 sm:px-0'>
            {children.map((child, index) => (
              <div
                key={index}
                className={`${''} shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${child.style}`}
              >
                <img src={child.src} alt='' className='w-20 mx-auto' />
                <p className='mt-4'>{child.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const experience = () => {
    const tech =[
      {
        id:1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
      },
      {
        id:2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
      },
      {
        id:3,
        src: javascript,
        title: 'Javascript',
        style: 'shadow-yellow-500'
      },
      {
        id:4,
        src: reactimg,
        title: 'React',
        style: 'shadow-blue-700'
      },
      {
        id:5,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-gray-500'
      },
      {
        id:6,
        src: github,
        title: 'GitHub',
        style: 'shadow-sky-500'
      }
    ];
  return (
    <div>
      <Experience>
        {tech}
      </Experience>
    </div>
  );
};

export default experience;
