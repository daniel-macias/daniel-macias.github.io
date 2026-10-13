import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


import { useTranslation } from 'next-i18next';

const Contact = () => {
  const { t } = useTranslation('common'); //remember to check common.json to see strings
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1024px] m-auto px-2 py-16 lg:w-10/12'>
        <p className='section-label'>
          {t('contact')}
        </p>
        <h2 className='py-4 font-semibold JosefinSansFont'>{t('contact-sub-title')}</h2>
        <div className='lg:hidden flex justify-center'>
          <span className='brand-dot !h-20 !w-20' aria-hidden='true' />
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Left column */}
          <div className='col-span-1 w-full h-full p-4 flex items-center justify-center'>
            <div className='hidden lg:block'>
              <span className='brand-dot !h-20 !w-20' aria-hidden='true' />
            </div>
          </div>

          {/* Right column */}
          <div className='col-span-3 w-full h-full border border-black/10 bg-[#EEEAE4] rounded-2xl p-4'>
            <div className='p-4'>
              <div className='pb-4'>
                <h2 className='py-2 font-semibold JosefinSansFont'>Daniel Macías</h2>
                <p>{t('title')}</p>
                <p className='py-4'>
                  {t('contact-desc')}
                </p>
              </div>
              <div>
                <p className='pt-8'>{t('contact-connect')}</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/daniel-mac%C3%ADas-reynaud-b4b69a152/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 flex items-center justify-center space-x-2 mx-2'
                  >
                    <div className='p-6 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center w-full'>
                      <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </div>
                    
                  </a>
                  <a
                    href='https://github.com/daniel-macias'
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 flex items-center justify-center space-x-2 mx-2'
                  >
                    <div className='p-6 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center w-full'>
                      <FontAwesomeIcon size="2x" icon={faGithub} />
                    </div>
                    
                  </a>
                  <a href='mailto:maciasreyaud@gmail.com' className='flex-1 flex items-center justify-center space-x-2 mx-2'>
                    <div className='p-6 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center w-full'>
                      <FontAwesomeIcon size="2x" icon={faEnvelope} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='py-4 px-5 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FontAwesomeIcon icon={faAnglesUp} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
