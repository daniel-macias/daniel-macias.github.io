import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThumbQuizzer from '../public/assets/quizzer/thumb-quizzer.png';
import ThumbMultitool from '../public/assets/multitool/thumb-info.png';
import ThumbLandmass from '../public/assets/landmass/thumb-landmass.png';
import ThumbWords from '../public/assets/puzzle/thumb-words.png';
import NodePic from '../public/assets/skills/node.png';
import ReactPic from '../public/assets/skills/react.png';
import TailwindPic from '../public/assets/skills/tailwind.png';
import MUIPic from '../public/assets/skills/mui.png';
import TypescriptPic from '../public/assets/skills/typescript.png';
import NextPic from '../public/assets/skills/nextjs.png';
import GoPic from '../public/assets/skills/go.png';

const Projects = () => {
  return (
    <div id='projects' className='mx-auto lg:w-10/12'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#4B007F] font-semibold JosefinSansFont'>
          Projects
        </p>
        <h2 className='py-4 text-2xl JosefinSansFont'>Web Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Quick Quizzer */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Quick Quizzer</p>
            <p>A streamlined quiz platform designed to simplify and accelerate quiz creation and management. Benefit from real-time results and detailed feedback for each participant. Ideal for educators and trainers looking to enhance learning experiences without the hassle of complex software.</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={GoPic} name="Go" />
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={NextPic} name="Next.js" />
            </div>
            <Link href={'/quizzer'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>More Information</p>
            </Link>
          </div>
          <Image className='rounded-sm col-span-2 md:col-span-1' src={ThumbQuizzer} alt='Quick Quizzer' />
          <hr className='my-8 border-gray-300 col-span-2' />

          {/* Quick Vulnerability Scanner */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Quick Vulnerability Scanner</p>
            <p>A versatile tool offering four distinct malware scanning options, ensuring swift on-the-go results. Eliminate the need to navigate various pages and scanners – stop here to obtain the precise results you seek. Post-scan, download a comprehensive report detailing your findings.</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={NodePic} name="Node.js" />
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={NextPic} name="Next.js" />
            </div>
            <Link href={'/infosecurity'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>More Information</p>
            </Link>
          </div>
          <Image className='rounded-sm col-span-2 md:col-span-1' src={ThumbMultitool} alt='Quick Vulnerability Scanner' />
          <hr className='my-8 border-gray-300 col-span-2' />

          {/* Landmass Generator */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Landmass Generator</p>
            <p>An image generator designed to produce shapes resembling land and water masses found on Earth. Leveraging Perlin noise, alongside other mathematical formulas and constants, this tool generates diverse landmass patterns suitable for applications in worldbuilding and various hobbies.</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={NodePic} name="Node.js" />
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={MUIPic} name="MUI" />
            </div>
            <Link href={'/landmass'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>More Information</p>
            </Link>
          </div>
          <Image className='rounded-sm col-span-2 md:col-span-1' src={ThumbLandmass} alt='Landmass Generator' />
          <hr className='my-8 border-gray-300 col-span-2' />

          {/* MaciWords */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">MaciWords</p>
            <p>A captivating world puzzle inspired by the New York Times&apos; &lsquo;Wordle&rsquo; game, with a twist. Players enjoy unlimited attempts to unravel the daily puzzle, each try unveiling new hints to guide them towards a solution. A new word puzzle challenge is refreshed every day!</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={NodePic} name="Node.js" />
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={NextPic} name="Next.js" />
            </div>
            <Link href={'/maciwords'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>More Information</p>
            </Link>
          </div>
          <Image className='rounded-sm col-span-2 md:col-span-1' src={ThumbWords} alt='MaciWords' />
        </div>
      </div>
    </div>
  );
};

const TechStackIcon = ({ src, name }) => (
  <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
    <div className='m-auto'>
      <Image src={src} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
    </div>
    <div className='flex flex-col items-center justify-center flex-grow'>
      <h3 className="text-sm hidden sm:block">{name}</h3>
    </div>
  </div>
);

export default Projects;
