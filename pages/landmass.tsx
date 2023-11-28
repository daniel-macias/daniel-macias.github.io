import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import ImageCarousel from '../components/ImageCarousel'
import ImgThumb from '../public/assets/landmass/thumb-landmass.png'
import ImgLandmass0 from '../public/assets/landmass/landmass-0.png'
import ImgLandmass1 from '../public/assets/landmass/landmass-1.png'
import ImgLandmass2 from '../public/assets/landmass/landmass-2.png'


const landmass = () => {
  return (
    <div className='w-full'>
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
          <h2 className='py-2 JosefinSansFont font-semibold'>Landmass Generator</h2>
          <h3 className='JosefinSansFont'>Node JS | React JS | TypeScript | MUI</h3>
        </div>
      </div>
      

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-3'>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
          <p>Project</p>
          <h2 className='text-xl'>Overview</h2>
          <p>
          An image generator designed to produce shapes resembling land and water masses found on Earth. Leveraging Perlin noise, alongside other mathematical formulas and constants, this tool generates diverse landmass patterns suitable for applications in worldbuilding and various hobbies.
          </p>
          <a
            href='https://github.com/daniel-macias/landmass'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-4 py-2 mt-4 mr-8'><FontAwesomeIcon icon={faGithub} /> Repository</button>
          </a>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-4 py-2 mt-4'>Live Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-2 py-4'>
          <div className='p-2'>
            <div className='md:grid-cols-1 max-h-5'>
            <ImageCarousel images={[ImgLandmass0,ImgLandmass1,ImgLandmass2]}/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default landmass