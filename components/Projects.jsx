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
          
          <ProjectItem
            title='Cybersecurity Swizz Army Knife'
            backgroundImg={TempImg}
            projectUrl='/csak'
            tech='React JS'
          />
          <div className="flex flex-col justify-center items-center">
            <h3>Cybersecurity Swizz Army Knife</h3>
            <p>Description</p>
            <p>BUTTON</p>
          </div>
          
          
          <ProjectItem
            title='Landmass Generator'
            backgroundImg={TempImg}
            projectUrl='/generator'
            tech='React JS'
          />
          <div className="flex flex-col justify-center items-center">
            <h3>Landmass Generator</h3>
            <p>Description</p>
            <p>BUTTON</p>
          </div>

          
          <ProjectItem
            title='Word Puzzle'
            backgroundImg={TempImg}
            projectUrl='/puzzle'
            tech='React JS'
          />
          <div className="flex flex-col justify-center items-center">
            <h3>Word Puzzle</h3>
            <p>Description</p>
            <p>BUTTON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;