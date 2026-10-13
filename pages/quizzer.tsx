import ProjectPage from '../components/ProjectPage';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ImgThumb from '../public/assets/quizzer/thumb-quizzer.png'
import ImgQuizzer0 from '../public/assets/quizzer/quizzer-0.png'
import ImgQuizzer1 from '../public/assets/quizzer/quizzer-1.png'
import ImgQuizzer2 from '../public/assets/quizzer/quizzer-2.png'
import ImgQuizzer3 from '../public/assets/quizzer/quizzer-3.png'
import ImgQuizzer4 from '../public/assets/quizzer/quizzer-4.png'
export default function Quizzer() {
 const { t } = useTranslation('common');
 const { locale } = useRouter();
 return <ProjectPage name='Quick Quizzer' descriptionKey='quick-quizzer-desc' technologies={['Go', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']} heroImage={ImgThumb} images={[ImgQuizzer0, ImgQuizzer1, ImgQuizzer2, ImgQuizzer3, ImgQuizzer4]} externalLinks={[{label: t('repository'), url: 'https://github.com/daniel-macias/instant-quizzer-frontend'}, {label: t('open-live-demo'), url: 'https://instant-quizzer-frontend.vercel.app/'}, {label: (locale === 'es' ? 'Repositorio del backend' : 'Backend repository'), url: 'https://github.com/daniel-macias/instant-quizzer-backend'}]} />;
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};