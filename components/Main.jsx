import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Main() {
  const { t } = useTranslation('common');
  return <section id='home' className='site-container pb-20 pt-36 text-center md:pb-24 md:pt-40'>
    <div aria-hidden='true' className='mx-auto mb-10 h-12 w-12 rounded-full bg-[#F472B6]' />
    <p className='section-label justify-center'>{t('title')}</p>
    <h1 className='mt-5'>{t('name')}</h1>
    <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-[#525252]'>{t('subtitle')}</p>
    <Link href='/#projects' className='primary-button mt-8'>{t('view-projects')}<FontAwesomeIcon icon={faArrowRight} className='text-xs' /></Link>
  </section>;
}
