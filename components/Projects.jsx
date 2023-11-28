import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import TempImg from '../public/assets/temp.png'

const Projects = () => {
  return (
    <div id='projects' className='mx-auto lg:w-10/12'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <div className="flex flex-col justify-center items-center sm:order-1 order-1">
            <p className="text-xl">Information Security Multitool</p>
            <p>Description</p>
            <Link href={'/infosec-multitool'}>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
          </div>
          <Image className='rounded-xl group-hover:opacity-10 sm:order-2 order-2' src={TempImg} alt='/' /> 
          
          <div className="flex flex-col justify-center items-center sm:order-4 order-3">
            <h3>Landmass Generator</h3>
            <p>Description</p>
            <p>BUTTON</p>
          </div>
          <Image className='rounded-xl group-hover:opacity-10 sm:order-3 order-4' src={TempImg} alt='/' /> 
          
          <div className="flex flex-col justify-center items-center sm:order-5 order-5">
            <h3>Word Puzzle</h3>
            <p>Description</p>
            <p>BUTTON</p>
          </div>
          <Image className='rounded-xl group-hover:opacity-10 sm:order-6 order-6' src={TempImg} alt='/' /> 
        </div>
      </div>
    </div>
  );
};

export default Projects;