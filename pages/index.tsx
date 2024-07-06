import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Macias | Full-Stack Developer</title>
        <meta name="description" content="I'm a full-stack web developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between." />
        <meta name="keywords" content="Daniel Macias, full-stack developer, web development, JavaScript, React, Node.js" />
        <link rel="icon" href="/dmr-fav.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Daniel Macias | Full-Stack Developer" />
        <meta property="og:description" content="I'm a full-stack web developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between." />
        <meta property="og:image" content="/dmr-banner.png" />
        <meta property="og:url" content="https://www.maciasreynaud.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Macias | Full-Stack Developer" />
        <meta name="twitter:description" content="I'm a full-stack web developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between." />
        <meta name="twitter:image" content="/dmr-banner.png" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.maciasreynaud.com/" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};