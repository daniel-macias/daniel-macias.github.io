import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

/**
 * @param {{
 *   name: string,
 *   descriptionKey: string,
 *   technologies: string[],
 *   date?: string,
 *   scopeKey?: string,
 *   demoUrl?: string,
 *   externalLinks?: {label: string, url: string}[],
 *   heroImage?: import('next/image').StaticImageData,
 *   heroImageFit?: 'cover' | 'contain',
 *   images?: import('next/image').StaticImageData[],
 *   portraitImages?: boolean
 * }} props
 */
const ProjectPage = ({ name, descriptionKey, technologies, date, scopeKey, demoUrl, externalLinks = [], heroImage, heroImageFit = 'cover', images = [], portraitImages = false }) => {
  const { t } = useTranslation('common');

  return (
    <main className='min-h-screen px-6 pb-24 pt-32'>
      <Head><title>{`${name} | Daniel Macías`}</title></Head>
      <div className='mx-auto max-w-[900px]'>
        <Link href='/#projects' className='inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#4B007F]'>
          <FontAwesomeIcon icon={faArrowLeft} /> {t('back-to-projects')}
        </Link>
        <div className='relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#4B007F] to-[#8066c9] px-7 py-20 text-white md:px-12'>
          {heroImage && <><Image priority src={heroImage} alt='' fill className={heroImageFit === 'contain' ? 'object-contain p-12 opacity-20 md:object-right md:p-8 md:opacity-70' : 'object-cover'} /><div className={`absolute inset-0 ${heroImageFit === 'contain' ? 'bg-gradient-to-r from-[#4B007F] via-[#4B007F]/80 to-transparent' : 'bg-black/60'}`} /></>}
          <div className={`relative z-10 ${heroImageFit === 'contain' ? 'md:max-w-[55%]' : ''}`}>
          <p className='text-sm uppercase tracking-[0.22em] text-white/70'>{date ? `${t('project')} · ${date}` : t('project')}</p>
          <h1 className='mt-3 text-5xl font-semibold JosefinSansFont md:text-7xl'>{name}</h1>
          {scopeKey && <p className='mt-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold'>{t(scopeKey)}</p>}
          </div>
        </div>
        <div className='mt-10 grid gap-10 md:grid-cols-[1fr_auto]'>
          <div>
            <h2 className='text-xl JosefinSansFont'>{t('overview')}</h2>
            <p className='mt-4 max-w-2xl leading-7 text-gray-600'>{t(descriptionKey)}</p>
          </div>
          <div>
            <p className='text-xs font-semibold uppercase tracking-widest text-gray-500'>{t('technologies')}</p>
            <p className='mt-3 max-w-xs text-sm text-gray-700'>{technologies.join(' · ')}</p>
          </div>
        </div>
        <div className='mt-10'>
          {externalLinks.length > 0 ? (
            <div className='flex flex-wrap gap-3'>
              {externalLinks.map((link) => <a key={link.url} href={link.url} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full bg-[#4B007F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7132B2]'>{link.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>)}
            </div>
          ) : demoUrl ? (
            <a href={demoUrl} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full bg-[#4B007F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7132B2]'>
              {t('open-live-demo')} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          ) : (
            <span className='inline-flex rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-500'>{t('demo-coming')}</span>
          )}
        </div>
        {images.length > 0 && (
          <div className={`mt-16 grid gap-5 ${portraitImages ? 'grid-cols-2 md:grid-cols-4' : 'md:grid-cols-2'}`}>
            {images.map((image, index) => <Image key={index} src={image} alt={`${name} screenshot ${index + 1}`} className={`w-full rounded-xl border border-gray-200 object-cover ${!portraitImages && index === 0 ? 'md:col-span-2' : ''}`} />)}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
