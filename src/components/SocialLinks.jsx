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
            href: "http://linkedin.com",
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>GitHub <FaGithub size={30}/> </>
            ),
            href: "http://github.com",
          
        },
        {
            id:3,
            child:(
                <>Mail <HiOutlineMail size={30}/> </>
            ),
            href: "mailto:test@gmail.com",
        
        },
        {
            id:4,
            child:(
                <>Resume <BsFillPersonLinesFill size={30}/> </>
            ),
            href: "/portfolio/public/Lahiru Prabath.pdf",
            style: 'rounded-tr-md',
            download:true,
        }

    ]

  return (
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
  )
}

export default SocialLinks;