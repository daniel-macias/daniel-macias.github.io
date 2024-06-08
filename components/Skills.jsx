import Image from 'next/image';
import React from 'react';
import NodePic from '../public/assets/skills/node.png';
import ReactPic from '../public/assets/skills/react.png';
import TailwindPic from '../public/assets/skills/tailwind.png';
import MUIPic from '../public/assets/skills/mui.png';
import NextPic from '../public/assets/skills/nextjs.png';
import MongoPic from '../public/assets/skills/mongo.png';
import SQLPic from '../public/assets/skills/sql.png';
import JavascriptPic from '../public/assets/skills/javascript.png';
import TypescriptPic from '../public/assets/skills/typescript.png';
import GoPic from '../public/assets/skills/go.png';
import PythonPic from '../public/assets/skills/python.png';
import CplusplsPic from '../public/assets/skills/cplusplus.png';
import CsharpPic from '../public/assets/skills/csharp.png';
import WiresharkPic from '../public/assets/skills/wireshark.png';
import BurpsuitePic from '../public/assets/skills/burpsuite.png';
import MetasploitPic from '../public/assets/skills/metasploit.png';
import AWSPic from '../public/assets/skills/aws.png';
import DockerPic from '../public/assets/skills/docker.png';
import LinuxPic from '../public/assets/skills/linux.png';

const skillsData = [
  {
    category: 'Preferred Web Stack',
    subcategories: [
      {
        subcategory: 'Front End',
        items: [
          { name: 'React.js', img: ReactPic },
          { name: 'Tailwind', img: TailwindPic },
          { name: 'Next.js', img: NextPic },
        ],
      },
      {
        subcategory: 'Back End',
        items: [
          { name: 'Node.js', img: NodePic },
          { name: 'MongoDB', img: MongoPic },
          { name: 'SQL', img: SQLPic },
        ],
      },
    ],
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript', img: JavascriptPic },
      { name: 'TypeScript', img: TypescriptPic },
      { name: 'Python', img: PythonPic },
      { name: 'GoLang', img: GoPic },
      { name: 'C++', img: CplusplsPic },
      { name: 'C#', img: CsharpPic },
    ],
  },
  {
    category: 'Security',
    items: [
      { name: 'Wireshark', img: WiresharkPic },
      { name: 'BurpSuite', img: BurpsuitePic },
      { name: 'Metasploit', img: MetasploitPic },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'Amazon Web Services', img: AWSPic },
      { name: 'Docker', img: DockerPic },
      { name: 'Linux', img: LinuxPic },
    ],
  },
];

const Skills = () => {
  return (
    <div id='skills' className='mx-auto lg:w-10/12 lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#4B007F] font-semibold JosefinSansFont'>
          Skills
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsData.map((category, index) => (
            <div key={index} className="p-4 bg-gray-100">
              <h2 className='text-xl JosefinSansFont'>{category.category}</h2>
              {category.subcategories ? (
                category.subcategories.map((subcategory, subindex) => (
                  <div key={subindex}>
                    <h3 className='text-lg JosefinSansFont pt-4'>{subcategory.subcategory}</h3>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {subcategory.items.map((item, idx) => (
                        <div key={idx} className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col items-center'>
                          <div className='w-20 h-20 flex items-center justify-center'>
                            <Image src={item.img} alt={item.name} className='w-full h-full object-contain' />
                          </div>
                          <div className='flex flex-col items-center justify-center mt-4'>
                            <h3 className="text-sm text-center">{item.name}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col items-center'>
                      <div className='w-20 h-20 flex items-center justify-center'>
                        <Image src={item.img} alt={item.name} className='w-full h-full object-contain' />
                      </div>
                      <div className='flex flex-col items-center justify-center mt-4'>
                        <h3 className="text-sm text-center">{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
