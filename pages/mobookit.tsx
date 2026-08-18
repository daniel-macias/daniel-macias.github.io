import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProjectPage from '../components/ProjectPage';
import MobookitIcon from '../public/assets/mobookit/mobookit_icon.webp';
import MobookitHome from '../public/assets/mobookit/mobookitdemo230x511bb.webp';
import MobookitColors from '../public/assets/mobookit/mobookitdemo230x511bb (1).webp';
import MobookitGarage from '../public/assets/mobookit/mobookitdemo230x511bb (2).webp';
import MobookitFaces from '../public/assets/mobookit/mobookitdemo230x511bb (3).webp';

export default function Mobookit() {
  return <ProjectPage name='Mobookit' date='2025–2026' descriptionKey='mobookit-desc' technologies={['Godot', 'Android', 'iOS']} heroImage={MobookitIcon} heroImageFit='contain' images={[MobookitHome, MobookitColors, MobookitGarage, MobookitFaces]} portraitImages externalLinks={[
    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.macicola.mobookit&hl=en' },
    { label: 'App Store', url: 'https://apps.apple.com/us/app/mobookit/id6775362360' },
  ]} />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
});
