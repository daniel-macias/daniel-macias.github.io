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
      <div className='mx-auto max-w-[976px]'>
        <Link href='/#projects' className='text-link text-[#525252]'>
          <FontAwesomeIcon icon={faArrowLeft} /> {t('back-to-projects')}
        </Link>
        <div className='mt-10 grid items-center gap-10 border-b border-black/10 pb-14 md:grid-cols-2'>
          <div>
            <p className='section-label'>{date ? `${t('project')} · ${date}` : t('project')}</p>
            <h1 className='mt-5'>{name}</h1>
            {scopeKey && <p className='mt-5 text-sm text-[#737373]'>{t(scopeKey)}</p>}
          </div>
          {heroImage && <div className='relative h-64 overflow-hidden rounded-2xl border border-black/10 bg-[#EEEAE4]'><Image priority src={heroImage} alt={`${name} preview`} fill className={heroImageFit === 'contain' ? 'object-contain p-8' : 'object-cover'} /></div>}
        </div>
        <div className='mt-14 grid gap-10 md:grid-cols-[2fr_1fr]'>
          <div>
            <h2 className='text-2xl'>{t('overview')}</h2>
            <p className='mt-4 max-w-2xl leading-7 text-gray-600'>{t(descriptionKey)}</p>
          </div>
          <div>
            <p className='section-label'>{t('technologies')}</p>
            <p className='mt-3 max-w-xs text-sm text-[#525252]'>{technologies.join(' · ')}</p>
          </div>
        </div>
        <div className='mt-10'>
          {externalLinks.length > 0 ? (
            <div className='flex flex-wrap gap-3'>
              {externalLinks.map((link) => <a key={link.url} href={link.url} target='_blank' rel='noreferrer' className='primary-button'>{link.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>)}
            </div>
          ) : demoUrl ? (
            <a href={demoUrl} target='_blank' rel='noreferrer' className='primary-button'>
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
