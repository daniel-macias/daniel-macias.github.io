import ProjectPage from '../components/ProjectPage';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ImgThumb from '../public/assets/puzzle/thumb-words.png'
import ImgPuzzle0 from '../public/assets/puzzle/puzzle-0.png'
import ImgPuzzle1 from '../public/assets/puzzle/puzzle-1.png'
import ImgPuzzle2 from '../public/assets/puzzle/puzzle-2.png'
export default function Maciwords() {
 const { t } = useTranslation('common');
 const { locale } = useRouter();
 return <ProjectPage name='MaciWords' descriptionKey='maciwords-desc' technologies={['Node.js', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']} heroImage={ImgThumb} images={[ImgPuzzle0, ImgPuzzle1, ImgPuzzle2]} externalLinks={[{label: t('repository'), url: 'https://github.com/daniel-macias/macipalabras'}, {label: t('open-live-demo'), url: 'https://macipalabras-daniel-macias-projects.vercel.app/'}]} />;
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};