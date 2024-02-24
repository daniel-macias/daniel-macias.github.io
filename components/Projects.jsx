import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThumbMultitool from '../public/assets/multitool/thumb-info.png'
import ThumbLandmass from '../public/assets/landmass/thumb-landmass.png'
import ThumbWords from '../public/assets/puzzle/thumb-words.png'
import NodePic from '../public/assets/skills/node.png';
import ReactPic from '../public/assets/skills/react.png';
import JavascriptPic from '../public/assets/skills/javascript.png';
import TailwindPic from '../public/assets/skills/tailwind.png'
import MUIPic from '../public/assets/skills/mui.png';
import TypescriptPic from '../public/assets/skills/typescript.png'
import NextPic from '../public/assets/skills/nextjs.png'

const Projects = () => {
  return (
    <div id='projects' className='mx-auto lg:w-10/12'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#9f3e7d] font-semibold JosefinSansFont'>
          Projects
        </p>
        <h2 className='py-4 text-2xl JosefinSansFont'>Web Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <div className="flex flex-col justify-center items-center sm:order-1 order-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Quick Vulnerability Scanner</p>
            <p>A versatile tool offering four distinct malware scanning options, ensuring swift on-the-go results. Eliminate the need to navigate various pages and scanners – stop here to obtain the precise results you seek. Post-scan, download a comprehensive report detailing your findings.</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={NodePic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Node.js</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={ReactPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">React.js</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={TypescriptPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">TypeScript</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={TailwindPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Tailwind</h3>
                </div>
              </div>

            </div>

            <Link href={'/infosecurity'}>
              <p className='text-center py-2 px-3 mt-2 rounded-lg bg-[#9f3e7d] text-gray-100 text-lg cursor-pointer hover:bg-gradient-to-r from-[#be5d9c] to-[#be5d9c] JosefinSansFont shadow-xl shadow-gray-400'>More Information</p>
            </Link>
            
          </div>
          <Image className='rounded-xl group-hover:opacity-10 sm:order-2 order-2' src={ThumbMultitool} alt='/' /> 
          
          <div className="flex flex-col justify-center items-center sm:order-4 order-3">
            <div className="sm:hidden border-t border-gray-300 my-8"><hr /></div>
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Landmass Generator</p>
            <p>An image generator designed to produce shapes resembling land and water masses found on Earth. Leveraging Perlin noise, alongside other mathematical formulas and constants, this tool generates diverse landmass patterns suitable for applications in worldbuilding and various hobbies.</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={NodePic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Node.js</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={ReactPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">React.js</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={TypescriptPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">TypeScript</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={MUIPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">MUI</h3>
                </div>
              </div>

            </div>
            <Link href={'/landmass'}>
              <p className='text-center py-2 px-3 mt-2 rounded-lg bg-[#9f3e7d] text-gray-100 text-lg cursor-pointer hover:bg-gradient-to-r from-[#be5d9c] to-[#be5d9c] JosefinSansFont shadow-xl shadow-gray-400'>More Information</p>
            </Link>
            
          </div>
          <Image className='rounded-xl group-hover:opacity-10 sm:order-3 order-4' src={ThumbLandmass} alt='/' /> 
          
          <div className="flex flex-col justify-center items-center sm:order-5 order-5">
            <div className="flex flex-col justify-center items-center sm:order-4 order-3">
            <div className="sm:hidden border-t border-gray-300 my-8"><hr /></div>
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">MaciWords</p>
              <p>A captivating world puzzle inspired by the New York Times&apos; &lsquo;Wordle&rsquo; game, with a twist. Players enjoy unlimited attempts to unravel the daily puzzle, each try unveiling new hints to guide them towards a solution. A new word puzzle challenge is refreshed every day!</p>
              <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={NodePic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Node.js</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={ReactPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">React.js</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={TypescriptPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">TypeScript</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={NextPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Next.js</h3>
                </div>
              </div>

            </div>
              <Link href={'/maciwords'}>
                <p className='text-center py-2 px-3 mt-2 rounded-lg bg-[#9f3e7d] text-gray-100 text-lg cursor-pointer hover:bg-gradient-to-r from-[#be5d9c] to-[#be5d9c] JosefinSansFont shadow-xl shadow-gray-400'>More Information</p>
              </Link>
              
            </div>
          </div>
          <Image className='rounded-xl group-hover:opacity-10 sm:order-6 order-6' src={ThumbWords} alt='/' /> 
        </div>
      </div>
    </div>
  );
};

export default Projects;