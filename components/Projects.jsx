import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThumbQuizzer from '../public/assets/quizzer/thumb-quizzer.png';
import ThumbMultitool from '../public/assets/multitool/thumb-info.png';
import ThumbLandmass from '../public/assets/landmass/thumb-landmass.png';
import ThumbWords from '../public/assets/puzzle/thumb-words.png';
import NodePic from '../public/assets/skills/node.png';
import ReactPic from '../public/assets/skills/react.png';
import MUIPic from '../public/assets/skills/mui.png';
import TypescriptPic from '../public/assets/skills/typescript.png';
import NextPic from '../public/assets/skills/nextjs.png';
import GoPic from '../public/assets/skills/go.png';
import { useTranslation } from 'next-i18next';

const Projects = () => {
  const { t } = useTranslation('common'); //remember to check common.json to see strings
  return (
    <div id='projects' className='mx-auto lg:w-10/12'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#4B007F] font-semibold JosefinSansFont'>
          {t('projects')}
        </p>
        <h2 className='py-4 text-2xl JosefinSansFont'>{t('web-projects')}</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Quick Quizzer */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Quick Quizzer</p>
            <p>{t('quick-quizzer-desc')}</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={GoPic} name="Go" />
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={NextPic} name="Next.js" />
            </div>
            <Link href={'/quizzer'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>
              {t('more-info')}
              </p>
            </Link>
          </div>
          <Image className='rounded-sm col-span-2 md:col-span-1' src={ThumbQuizzer} alt='Quick Quizzer' />
          <hr className='my-8 border-gray-300 col-span-2' />

          {/* Quick Vulnerability Scanner */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Quick Vulnerability Scanner</p>
            <p>{t('scanner-desc')}</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={NodePic} name="Node.js" />
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={NextPic} name="Next.js" />
            </div>
            <Link href={'/infosecurity'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>
                {t('more-info')}
              </p>
            </Link>
          </div>
          <Image className='rounded-sm col-span-2 md:col-span-1' src={ThumbMultitool} alt='Quick Vulnerability Scanner' />
          <hr className='my-8 border-gray-300 col-span-2' />

          {/* Landmass Generator */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">Landmass Generator</p>
            <p>{t('landmass-desc')}</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={MUIPic} name="MUI" />
            </div>
            <Link href={'/landmass'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>
              {t('more-info')}
              </p>
            </Link>
          </div>
          <Image className='rounded-sm col-span-2 md:col-span-1' src={ThumbLandmass} alt='Landmass Generator' />
          <hr className='my-8 border-gray-300 col-span-2' />

          {/* MaciWords */}
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <p className="text-xl text-gray-700 font-semibold JosefinSansFont">MaciWords</p>
            <p>{t('maciwords-desc')}</p>
            <div className='flex space-x-2 mt-4 max-w-screen-lg mx-auto'>
              <TechStackIcon src={ReactPic} name="React.js" />
              <TechStackIcon src={TypescriptPic} name="TypeScript" />
              <TechStackIcon src={NextPic} name="Next.js" />
            </div>
            <Link href={'/maciwords'}>
              <p className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>
                {t('more-info')}
              </p>
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
      <Image src={src} width='64px' height='64px' alt='/' className='px-2 w-auto max-h-10' />
    </div>
    <div className='flex flex-col items-center justify-center flex-grow'>
      <h3 className="text-sm hidden sm:block">{name}</h3>
    </div>
  </div>
);

export default Projects;
