import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import ImageCarousel from '../components/ImageCarousel'
import ImgThumb from '../public/assets/multitool/thumb-info.png'
import ImgMulti0 from '../public/assets/multitool/security_0.png'
import ImgMulti1 from '../public/assets/multitool/security_1.png'
import ImgMulti2 from '../public/assets/multitool/security_2.png'
import ImgMulti3 from '../public/assets/multitool/security_3.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


export default function Infosecurity () {
  const { t } = useTranslation('common');
  const images = [ImgMulti0, ImgMulti1, ImgMulti2, ImgMulti3];

  return (
    <div className='w-full'>
      <Head>
        <title>Quick Vulnerability Scanner | Daniel Macías</title>
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
          <h2 className='py-2 JosefinSansFont font-semibold'>Quick Vulnerability Scanner</h2>
          <h3 className='JosefinSansFont'>Node JS | React JS | TypeScript | Next JS | Tailwind</h3>
        </div>
      </div>
      

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-3'>
          <Link href='/#projects'>
            <div className='w-10 h-10 flex items-center justify-center rounded-sm bg-[#000] text-gray-100 cursor-pointer hover:bg-[#555] shadow-xl shadow-gray-400 transition duration-500 mb-2'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </Link>
          <h2 className='text-xl'>{t('overview')}</h2>
          <p>
          {t('quick-quizzer-desc')}
          </p>
          <br />
          <a
            href='https://github.com/daniel-macias/quick-vulnerability-scanner'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500 mr-4'><FontAwesomeIcon icon={faGithub} /> {t('repository')}</button>
          </a>
          <a
            href='https://quick-vulnerability-scanner.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-center py-2 px-3 mt-2 rounded-sm bg-[#4B007F] text-gray-100 text-lg cursor-pointer hover:bg-[#7132B2] JosefinSansFont shadow-xl shadow-gray-400 transition duration-500'>{t('open-live-demo')}</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-2 py-4'>
          <div className='p-2'>
            <div className='md:grid-cols-1 max-h-5'>
              <ImageCarousel images={images} />   
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};