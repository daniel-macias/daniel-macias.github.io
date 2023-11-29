import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';

const Skills = () => {
  return (
    <div id='skills' className='mx-auto lg:w-10/12 lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#9f3e7d] font-semibold JosefinSansFont'>
          Skills
        </p>
        <h2 className='py-4 text-2xl JosefinSansFont'>Preferred Web Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-200">Item 1</div>
          <div className="p-4 bg-gray-300">Item 2</div>
          <div className="p-4 bg-gray-400">Item 3</div>
          <div className="p-4 bg-gray-500">Item 4</div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;