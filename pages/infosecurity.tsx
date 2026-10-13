import ProjectPage from '../components/ProjectPage';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ImgThumb from '../public/assets/multitool/thumb-info.png'
import ImgMulti0 from '../public/assets/multitool/security_0.png'
import ImgMulti1 from '../public/assets/multitool/security_1.png'
import ImgMulti2 from '../public/assets/multitool/security_2.png'
import ImgMulti3 from '../public/assets/multitool/security_3.png'
export default function Infosecurity() {
 const { t } = useTranslation('common');
 const { locale } = useRouter();
 return <ProjectPage name='Quick Vulnerability Scanner' descriptionKey='scanner-desc' technologies={['Node.js', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']} heroImage={ImgThumb} images={[ImgMulti0, ImgMulti1, ImgMulti2, ImgMulti3]} externalLinks={[{label: t('repository'), url: 'https://github.com/daniel-macias/quick-vulnerability-scanner'}, {label: t('open-live-demo'), url: 'https://quick-vulnerability-scanner.vercel.app/'}]} />;
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};