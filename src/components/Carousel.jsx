import React, { useState } from 'react';
import Project1 from '../assets/Projects/project1.png';
import Project2 from '../assets/Projects/project2.png';
import Project3 from '../assets/Projects/project3.png';
// import HotelWebImage from '../assets/Clearcash.png';



const Carousel = () => {
  const [selected, setSelected] = useState(0);

  const projects = [
    {
      id: 1,
      image: Project1,
      topic: 'Portfolio Website',
      description: 'React-PortFolio Website with Tailwind css',
      demoLink: 'https://lahiruprabathft.github.io/my-portfolio/',
      codeLink: 'https://github.com/lahiruprabathft/my-portfolio.git',
    },
    {
      id: 2,
      image: Project2,
      topic: 'ClearCache',
      description: 'Chrome Extension - ClearCache.',
      demoLink: 'https://github.com/lahiruprabathft/CacheClearExtension.git',
      codeLink: 'https://github.com/lahiruprabathft/CacheClearExtension.git',
    },
    {
      id: 2,
      image: Project3,
      topic: 'Hotel Website',
      description: 'Simple Hotel Website Landing - HTML CSS',
      demoLink: 'https://lahiruprabathft.github.io/hotel-website/',
      codeLink: 'https://github.com/lahiruprabathft/hotel-website.git',
    },
    // Add more project details here
  ];

  const selectProject = (index) => {
    setSelected(index);
  };

  const nextProject = () => {
    setSelected((selected + 1) % projects.length);
  };

  const prevProject = () => {
    setSelected((selected - 1 + projects.length) % projects.length);
  };


  return (
    <div  name='Portfolio' className='w-full'> 
       <div className='pb-2 text-center lg:text-left'>
            <p className='subheading'>PortFolio</p>
        </div>
    <div  className="flex items-center justify-center w-full h-screen pr-[100px] bg-slate-50">
        
    <div className='flex justify-between relative top-[50%] left-[48%]'> 
      <button
        className="bg-cyan-700 text-white px-4 py-2 my-6 mx-5 rounded-full focus:outline-none"
        onClick={prevProject}
      >
        Prev
      </button>
      <button
        className="bg-cyan-700 text-white px-4 py-2 my-6 mx-5 rounded-full focus:outline-none"
        onClick={nextProject}
      >
        Next
      </button>

      </div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`w-1/5 h-2/5 transform ${
            index === selected
              ? 'scale-150'
              : index === (selected - 1 + projects.length) % projects.length ||
                index === (selected + 1) % projects.length
              ? 'scale-125'
              : ''
          } transition-transform duration-300 mx-16`}
          onClick={() => selectProject(index)}
        >
          <div className="bg-white rounded-lg p-2 pr-[40px]">
            <img src={project.image} alt={project.topic} className='w-full h-40 object-cover mb-4' />
            <h2 className="text-xl font-semibold">{project.topic}</h2>
            <p className="text-gray-500 mb-4 text-[10px]">{project.description}</p>
            <div className="flex justify-between  px-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-[10px] w-[80px] h-[20px] text-center pt-[2px] rounded-full hover:bg-blue-600 text-white focus:outline-none"
              >
                Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-[10px] w-[80px] h-[20px] text-center pt-[2px] rounded-full hover:bg-blue-600 text-white focus:outline-none"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Carousel;
