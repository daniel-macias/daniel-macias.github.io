import Image from 'next/image';
import React from 'react';
import NodePic from '../public/assets/skills/node.png';
import ReactPic from '../public/assets/skills/react.png';
import NextPic from '../public/assets/skills/nextjs.png';
import MongoPic from '../public/assets/skills/mongo.png';
import SQLPic from '../public/assets/skills/sql.png';
import JavascriptPic from '../public/assets/skills/javascript.png';
import TypescriptPic from '../public/assets/skills/typescript.png';
import GoPic from '../public/assets/skills/go.png';
import PythonPic from '../public/assets/skills/python.png';
import CplusplsPic from '../public/assets/skills/cplusplus.png';
import CsharpPic from '../public/assets/skills/csharp.png';
import AWSPic from '../public/assets/skills/aws.png';
import DockerPic from '../public/assets/skills/docker.png';
import GraphQLPic from '../public/assets/skills/graphql.png';
import NestJSPic from '../public/assets/skills/nestjs.png';
import Selenium from '../public/assets/skills/selenium.png';
import VuePic from '../public/assets/skills/vue.png';
import NuxtPic from '../public/assets/skills/nuxt.png';
import { useTranslation } from 'next-i18next';

const skillsData = [
  {
    category: 'Frontend Web',
    items: [
      { name: 'React.js', img: ReactPic },
      { name: 'Next.js', img: NextPic },
      { name: 'Vue.js', img: VuePic },
      { name: 'Nuxt.js', img: NuxtPic },
    ],
  },
  {
    category: 'Backend Web',
    items: [
      { name: 'Node.js', img: NodePic },
      { name: 'Nest.js', img: NestJSPic },
      { name: 'MongoDB', img: MongoPic },
      { name: 'SQL', img: SQLPic },
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
    category: 'Other',
    items: [
      { name: 'Amazon Web Services', img: AWSPic },
      { name: 'Docker', img: DockerPic },
      { name: 'Selenium', img: Selenium },
      { name: 'GraphQL', img: GraphQLPic },
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation('common'); //remember to check common.json to see strings

  return (
    <div id='skills' className='mx-auto lg:w-10/12 lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#4B007F] font-semibold JosefinSansFont'>
          {t('skills')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsData.map((category, index) => (
            <div key={index} className="p-4 bg-gray-100">
              <h2 className='text-xl JosefinSansFont'>{category.category}</h2>
              <div className="grid grid-cols-4 gap-4 mt-4">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
