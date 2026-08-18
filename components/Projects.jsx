import Image from 'next/image';
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
    <div id='projects' className='mx-auto lg:w-10/12'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#4B007F] font-semibold JosefinSansFont'>
          {t('projects')}
        </p>
        <h2 className='py-4 text-2xl JosefinSansFont'>{t('selected-work')}</h2>
        <div className='space-y-8'>
          <ProjectRow name='Cuculcan' date='2026' scope={t('full-stack-api')} description={t('cuculcan-desc')} image={ThumbCuculcan} href='/cuculcan' label={t('more-info')} stackLabel={t('stack')} technologies={[['React', ReactPic], ['Go', GoPic], ['PostgreSQL', SQLPic], ['Docker', DockerPic]]} />
          <ProjectRow reverse name='Landmass Generator' date='2023' description={t('landmass-desc')} image={ThumbLandmass} href='/landmass' label={t('more-info')} stackLabel={t('stack')} technologies={[['React', ReactPic], ['TypeScript', TypescriptPic], ['MUI', MUIPic]]} />
          <ProjectRow name='Mobookit' date='2025–2026' description={t('mobookit-desc')} image={ThumbMobookit} imageFit='contain' href='/mobookit' label={t('more-info')} stackLabel={t('platform-engine')} technologies={[['Godot', GodotPic], ['Android', AndroidPic], ['iOS', IOSPic]]} />
        </div>
      </div>
      <footer className='mx-auto flex max-w-[1240px] items-center justify-between border-t border-gray-300 px-2 py-8 text-sm text-gray-600'>
        <span>© {new Date().getFullYear()} Daniel Macías</span>
        <div className='flex gap-5'><a href='https://github.com/daniel-macias' target='_blank' rel='noreferrer'>GitHub</a><a href='https://www.linkedin.com/in/daniel-mac%C3%ADas-reynaud-b4b69a152/' target='_blank' rel='noreferrer'>LinkedIn</a></div>
      </footer>
    </div>
  );
};

const ProjectRow = ({ name, date, scope, description, image, imageFit = 'cover', href, label, placeholder, technologies, stackLabel, reverse = false }) => (
  <article className='grid overflow-hidden rounded-2xl border border-gray-200 bg-white/60 md:grid-cols-2'>
    <div className={`flex flex-col justify-center p-7 md:p-10 ${reverse ? 'md:order-2' : ''}`}>
      <div className='flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400'>
        <span>{date}</span>
        {scope && <><span aria-hidden='true'>·</span><span className='text-[#4B007F]'>{scope}</span></>}
      </div>
      <h3 className='mt-3 text-xl font-semibold JosefinSansFont'>{name}</h3>
      <p className='mt-3 text-sm leading-6 text-gray-600'>{description}</p>
      <Link href={href} className='mt-5 inline-flex w-fit rounded-full bg-[#4B007F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7132B2]'>{label}</Link>
    </div>
    <div className={`grid min-h-[300px] grid-cols-2 border-t border-gray-200 md:border-l md:border-t-0 ${reverse ? 'md:order-1 md:border-l-0 md:border-r' : ''}`}>
      <div className='flex flex-col items-center justify-center bg-gray-100 p-5'>
        <p className='mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400'>{stackLabel}</p>
        <div className='flex flex-wrap justify-center gap-3'>
          {technologies.map(([technology, icon]) => <TechIcon key={technology} name={technology} icon={icon} />)}
        </div>
      </div>
      <div className='relative min-h-[260px] overflow-hidden border-l border-gray-200'>
        {image ? (
          <Image className={`absolute inset-0 h-full w-full ${imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}`} src={image} alt={`${name} preview`} />
        ) : (
          <div className='flex h-full min-h-[260px] items-center justify-center bg-gradient-to-br from-[#4B007F] to-[#8066c9]'>
            <span className='text-5xl font-semibold text-white/80 JosefinSansFont'>{placeholder}</span>
          </div>
        )}
      </div>
    </div>
  </article>
);

const TechIcon = ({ name, icon }) => (
  <div className='flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-white/80 bg-white/90 p-3 shadow-sm'>
    <Image src={icon} alt='' className='h-10 w-10 object-contain' />
    <span className='mt-2 text-center text-[11px] font-semibold text-gray-600'>{name}</span>
  </div>
);

export default Projects;
