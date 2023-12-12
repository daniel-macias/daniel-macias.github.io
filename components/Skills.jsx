import Image from 'next/image';
import React from 'react';
import NodePic from '../public/assets/skills/node.png';
import ReactPic from '../public/assets/skills/react.png';

import TailwindPic from '../public/assets/skills/tailwind.png'
import MUIPic from '../public/assets/skills/mui.png';

import NextPic from '../public/assets/skills/nextjs.png'
import MongoPic from '../public/assets/skills/mongo.png'
import SQLPic from '../public/assets/skills/sql.png'

import JavascriptPic from '../public/assets/skills/javascript.png';
import TypescriptPic from '../public/assets/skills/typescript.png'
import GoPic from '../public/assets/skills/go.png'
import PythonPic from '../public/assets/skills/python.png'
import CplusplsPic from '../public/assets/skills/cplusplus.png'
import CsharpPic from '../public/assets/skills/csharp.png'

import WiresharkPic from '../public/assets/skills/wireshark.png'
import BurpsuitePic from '../public/assets/skills/burpsuite.png'
import MetasploitPic from '../public/assets/skills/metasploit.png'

import AWSPic from '../public/assets/skills/aws.png'
import DockerPic from '../public/assets/skills/docker.png'
import LinuxPic from '../public/assets/skills/linux.png'

const Skills = () => {
  return (
    <div id='skills' className='mx-auto lg:w-10/12 lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#9f3e7d] font-semibold JosefinSansFont'>
          Skills
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-200">
            <h2 className='text-xl JosefinSansFont'>Preferred Web Stack</h2>
            <h2 className='text-lg JosefinSansFont'>Front End</h2>
          <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>



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
                <Image src={TailwindPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
              </div>
              <div className='flex flex-col items-center justify-center flex-grow'>
                <h3 className="text-sm">Tailwind</h3>
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
            <h2 className='text-lg JosefinSansFont pt-4'>Back End</h2>
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
                  <Image src={MongoPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">MongoDB</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={SQLPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">SQL</h3>
                </div>
              </div>

            </div>
          </div>
          <div className="p-4 bg-gray-100">
            <h2 className='text-xl JosefinSansFont'>Programming Languages</h2>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={JavascriptPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">JavaScript</h3>
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
                  <Image src={PythonPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Python</h3>
                </div>
              </div>

            </div>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>



              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={GoPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">GoLang</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={CplusplsPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">C++</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={CsharpPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">C#</h3>
                </div>
              </div>

            </div>
          </div>
          <div className="p-4 bg-gray-100">
            <h2 className='text-xl JosefinSansFont'>Security</h2>
              <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>



              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={WiresharkPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Wireshark</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={BurpsuitePic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">BurpSuite</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={MetasploitPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Metasploit</h3>
                </div>
              </div>

            </div>
          </div>
          <div className="p-4 bg-gray-200">
            <h2 className='text-xl JosefinSansFont'>Other</h2>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={AWSPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Amazon Web Services</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={DockerPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Docker</h3>
                </div>
              </div>

              <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-row items-center'>
                <div className='m-auto'>
                  <Image src={LinuxPic} width='64px' height='64px' alt='/' className='px-2 w-auto h-auto' />
                </div>
                <div className='flex flex-col items-center justify-center flex-grow'>
                  <h3 className="text-sm">Linux</h3>
                </div>
              </div>

              </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;