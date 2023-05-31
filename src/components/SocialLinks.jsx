import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(
                <>LinkedIn <FaLinkedin size={30}/> </>
            ),
            href: "https://www.linkedin.com/in/lahiru-prabath/",
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>GitHub <FaGithub size={30}/> </>
            ),
            href: "https://github.com/lahiruprabathft",
          
        },
        {
            id:3,
            child:(
                <>Mail <HiOutlineMail size={30}/> </>
            ),
            href: "mailto:lahiruprabathft@gmail.com",
        
        },
        {
            id:4,
            child:(
                <>Resume <BsFillPersonLinesFill size={30}/> </>
            ),
            href: "/src/assets/Lahiru-Prabath Resume 2023.pdf",
            style: 'rounded-tr-md',
            download:true,
        }

    ];

  return (
    <>
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map (( {id,child,href,style,download}) => (
                <li key={id} className={"flex justify-between item-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] rounded-md duration-300"
                 + " " + style }>
  
                <a href={href}className='flex justify-between items-center w-full text-white'
                download={download} 
                target='blank'
                rel='noreferrer'
                
                >
                     {child}
            
            </a>
            </li>
            ))}

            
        </ul>
    </div>
       <div className="absolute top-[60%] left-[12%]  lg:hidden">
       <ul className='grid grid-cols-2 mx-2'>
         {links.map(({ id, child, href, style, download }) => (
           <li
             key={id}
             className={
               'flex justify-between items-center w-25 mx-2 h-10 px-4 text-sm bg-cyan-500 mb-4 rounded-md duration-300 hover:scale-105 transition-300' +
               ' ' +
               style
             }
           >
             <a
               href={href}
               className="flex justify-between items-center w-full text-white"
               download={download}
               target="_blank"
               rel="noreferrer"
             >
               {child}
             </a>
           </li>
         ))}
       </ul>
     </div>
    

     </>
  )
}

export default SocialLinks;