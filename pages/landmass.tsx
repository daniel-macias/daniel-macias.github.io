import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProjectPage from '../components/ProjectPage';
import LandmassThumb from '../public/assets/landmass/thumb-landmass.png';
import Landmass0 from '../public/assets/landmass/landmass-0.png';
import Landmass1 from '../public/assets/landmass/landmass-1.png';
import Landmass2 from '../public/assets/landmass/landmass-2.png';

export default function Landmass() {
  return (
    <ProjectPage
      name='Landmass Generator'
      date='2023'
      descriptionKey='landmass-desc'
      technologies={['React', 'TypeScript', 'MUI']}
      demoUrl='https://landmass-generator.vercel.app/'
      heroImage={LandmassThumb}
      images={[Landmass0, Landmass1, Landmass2]}
    />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
});
