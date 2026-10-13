import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import ThumbLandmass from '../public/assets/landmass/thumb-landmass.png';
import ThumbCuculcan from '../public/assets/cuculcan/Screenshot 2026-08-15 at 8.44.17 AM.png';
import ThumbMobookit from '../public/assets/mobookit/mobookit_icon.webp';
import ReactPic from '../public/assets/skills/react.png';
import TypescriptPic from '../public/assets/skills/typescript.png';
import MUIPic from '../public/assets/skills/mui.png';
import GoPic from '../public/assets/skills/go.png';
import SQLPic from '../public/assets/skills/sql.png';
import DockerPic from '../public/assets/skills/docker.png';
import GodotPic from '../public/assets/skills/Godot_icon.svg';
import AndroidPic from '../public/assets/skills/android.png';
import IOSPic from '../public/assets/skills/ios-os-logo-top-operating-system-signs-free-png.webp';
import { useTranslation } from 'next-i18next';

const Projects = () => {
  const { t } = useTranslation('common'); //remember to check common.json to see strings
  return (
    <div id='projects' className='site-container'>
      <div className='py-14 md:py-20'>
        <p className='section-label'>
          {t('projects')}
        </p>
        <h2 className='mb-8 mt-5'>{t('selected-work')}</h2>
        <div className='grid gap-6 md:grid-cols-3'>
          <ProjectRow name='Cuculcan' date='2026' scope={t('full-stack-api')} description={t('cuculcan-desc')} image={ThumbCuculcan} href='/cuculcan' label={t('more-info')} stackLabel={t('stack')} technologies={[['React', ReactPic], ['Go', GoPic], ['PostgreSQL', SQLPic], ['Docker', DockerPic]]} />
          <ProjectRow reverse name='Landmass Generator' date='2023' description={t('landmass-desc')} image={ThumbLandmass} href='/landmass' label={t('more-info')} stackLabel={t('stack')} technologies={[['React', ReactPic], ['TypeScript', TypescriptPic], ['MUI', MUIPic]]} />
          <ProjectRow name='Mobookit' date='2025–2026' description={t('mobookit-desc')} image={ThumbMobookit} imageFit='contain' href='/mobookit' label={t('more-info')} stackLabel={t('platform-engine')} technologies={[['Godot', GodotPic], ['Android', AndroidPic], ['iOS', IOSPic]]} />
        </div>
      </div>
      <footer className='flex flex-wrap items-center justify-between gap-4 border-t border-black/10 py-8 text-xs text-[#737373]'>
        <span>© {new Date().getFullYear()} Daniel Macías</span>
        <div className='flex gap-5'><a href='https://github.com/daniel-macias' target='_blank' rel='noreferrer'>GitHub</a><a href='https://www.linkedin.com/in/daniel-mac%C3%ADas-reynaud-b4b69a152/' target='_blank' rel='noreferrer'>LinkedIn</a></div>
      </footer>
    </div>
  );
};

const ProjectRow = ({ name, date, scope, description, image, imageFit = 'cover', href, label, technologies, stackLabel }) => (
  <article className='project-card flex flex-col'>
    <Link href={href} aria-label={`${label}: ${name}`} className='relative block h-48 overflow-hidden border-b border-black/10 bg-[#EEEAE4]'>
      <Image src={image} alt={`${name} preview`} className={`project-preview h-full w-full ${imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}`} />
    </Link>
    <div className='flex flex-1 flex-col p-6'>
      <p className='text-xs tracking-wider text-[#737373]'>{date}</p>
      <h3 className='mt-2'>{name}</h3>
      {scope && <p className='mt-2 text-xs text-[#737373]'>{scope}</p>}
      <p className='mb-6 mt-3 text-base leading-7 text-[#525252]'>{description}</p>
      <div className='mt-auto'>
        <p className='text-xs text-[#737373]'>{stackLabel}</p>
        <p className='mt-1 text-xs leading-6 text-[#525252]'>{technologies.map(([name]) => name).join(' · ')}</p>
        <Link href={href} className='text-link mt-5'>{label}<FontAwesomeIcon icon={faArrowRight} className='text-xs' /></Link>
      </div>
    </div>
  </article>
);
export default Projects;
