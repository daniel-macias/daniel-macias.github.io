import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProjectPage from '../components/ProjectPage';
import CuculcanCountries from '../public/assets/cuculcan/Screenshot 2026-08-15 at 8.44.17 AM.png';
import CuculcanDivisions from '../public/assets/cuculcan/Screenshot 2026-08-15 at 8.46.04 AM.png';
import CuculcanApi from '../public/assets/cuculcan/Screenshot 2026-08-15 at 8.46.52 AM.png';

export default function Cuculcan() {
  return <ProjectPage name='Cuculcan' date='2026' scopeKey='full-stack-api' descriptionKey='cuculcan-desc' technologies={['Frontend: React', 'Backend API: Go', 'PostgreSQL', 'PostGIS', 'Docker']} demoUrl='https://cuculcan.com' heroImage={CuculcanCountries} images={[CuculcanCountries, CuculcanDivisions, CuculcanApi]} />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
});
