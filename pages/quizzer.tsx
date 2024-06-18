import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import ImageCarousel from '../components/ImageCarousel'
import ImgThumb from '../public/assets/quizzer/thumb-quizzer.png'
import ImgQuizzer0 from '../public/assets/quizzer/quizzer-0.png'
import ImgQuizzer1 from '../public/assets/quizzer/quizzer-1.png'
import ImgQuizzer2 from '../public/assets/quizzer/quizzer-2.png'
import ImgQuizzer3 from '../public/assets/quizzer/quizzer-3.png'
import ImgQuizzer4 from '../public/assets/quizzer/quizzer-4.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const quizzer = () => {
  return (
    <div className='w-full'>
      <Head>
        <title>MaciWords | Daniel Macías</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={ImgThumb}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 JosefinSansFont font-semibold'>Quick Quizzer</h2>
          <h3 className='JosefinSansFont'>Go | React JS | TypeScript | Next JS | Tailwind</h3>
        </div>
      </div>
      

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-3'>
        <Link href='/#projects'>
            <div className='w-10 h-10 flex items-center justify-center rounded-sm bg-[#000] text-gray-100 cursor-pointer hover:bg-[#555] shadow-xl shadow-gray-400 transition duration-500 mb-2'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </Link>
          <h2 className='text-xl'>Overview</h2>
          <p className='mb-4'>
          A streamlined quiz platform designed to simplify and accelerate quiz creation and management. Benefit from real-time results and detailed feedback for each participant. Ideal for educators and trainers looking to enhance learning experiences without the hassle of complex software.
          </p>
          <h3>Frontend</h3>
          <hr />
          <a
            href='https://github.com/daniel-macias/instant-quizzer-frontend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500 mr-4'><FontAwesomeIcon icon={faGithub} /> Repository</button>
          </a>
          <a
            href='https://instant-quizzer-frontend.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>Open Live Demo</button>
          </a>
          <h3 className='mt-2'>Backend</h3>
          <hr />
          <a
            href='https://github.com/daniel-macias/instant-quizzer-backend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500 mr-4'><FontAwesomeIcon icon={faGithub} /> Repository</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-2 py-4'>
          <div className='p-2'>
            <div className='md:grid-cols-1 max-h-5'>
            <ImageCarousel images={[ImgQuizzer0,ImgQuizzer1,ImgQuizzer2, ImgQuizzer3, ImgQuizzer4]}/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default quizzer