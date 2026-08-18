import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';


const Main = () => {
  const { t } = useTranslation('common');

  return (
    <section id='home' className='relative flex min-h-screen items-center overflow-hidden px-6 pt-20'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(128,102,201,0.18),transparent_38%)]' />
      <div className='mx-auto w-full max-w-[900px] text-left'>
        <p className='mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#4B007F] JosefinSansFont'>{t('title')}</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] text-[#2b2b2b] JosefinSansFont md:text-7xl">
          {t('name')}
        </h1>
        <p className='mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl'>
          {t('subtitle')}
        </p>
        <Link href='/#projects' className='mt-8 inline-flex items-center rounded-full bg-[#4B007F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7132B2]'>
          {t('view-projects')}
        </Link>
      </div>
    </section>
  );
};

export default Main;
