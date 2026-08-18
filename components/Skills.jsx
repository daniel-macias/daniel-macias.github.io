import React from 'react';
import { useTranslation } from 'next-i18next';

const skillsData = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'AWS'];

const Skills = () => {
  const { t } = useTranslation('common'); //remember to check common.json to see strings

  return (
    <section id='skills' className='mx-auto max-w-[900px] px-6 pb-24'>
        <p className='mb-5 text-sm tracking-[0.22em] uppercase text-[#4B007F] font-semibold JosefinSansFont'>{t('technologies')}</p>
        <div className='flex flex-wrap gap-3'>
          {skillsData.map((skill) => (
            <span key={skill} className='rounded-full border border-gray-300 bg-white/50 px-4 py-2 text-sm text-gray-700'>{skill}</span>
          ))}
        </div>
    </section>
  );
};

export default Skills;
