import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full border border-black/10 bg-white/50 rounded-2xl group hover:bg-[#EEEAE4]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-[#262626] tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-[#262626] text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem