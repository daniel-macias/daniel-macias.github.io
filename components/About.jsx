import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function About() {
  const { t } = useTranslation('common');
  return <section id='about' className='site-container'>
    <div className='grid gap-8 border-y border-black/10 py-14 md:grid-cols-2 md:gap-16 md:py-20'>
      <div><p className='section-label'>{t('about')}</p><h2 className='mt-5'>{t('about-title')}</h2><p aria-hidden='true' className='mt-2 font-serif text-2xl font-bold tracking-tight text-[#737373]/40'>{t('about-title')}</p></div>
      <div><p className='leading-8 text-[#525252]'>{t('about-desc')}</p><Link href='/#projects' className='text-link mt-6'>{t('about-link')}<FontAwesomeIcon icon={faArrowRight} className='text-xs' /></Link></div>
    </div>
  </section>;
}
