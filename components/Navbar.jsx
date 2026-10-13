import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState('');
  const router = useRouter();
  useEffect(() => {
    const update = () => { setHash(window.location.hash); setOpen(false); };
    update();
    router.events.on('routeChangeComplete', update);
    router.events.on('hashChangeComplete', update);
    return () => { router.events.off('routeChangeComplete', update); router.events.off('hashChangeComplete', update); };
  }, [router.events]);
  const labels = router.locale === 'es' ? ['Inicio', 'Acerca de', 'Proyectos'] : ['Home', 'About', 'Projects'];
  return <header className='fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#F8F6F2]/95 backdrop-blur-sm'>
    <nav aria-label={router.locale === 'es' ? 'Navegación principal' : 'Main navigation'} className='site-container flex min-h-[80px] flex-wrap items-center justify-between gap-4 py-4'>
      <Link href='/' aria-label='Daniel Macías — Home' className='flex items-center gap-3 text-sm font-semibold'><span className='brand-dot' aria-hidden='true' />Daniel Macías</Link>
      <div className='flex items-center gap-5'>
        <div className='hidden items-center gap-7 md:flex'>{['/', '/#about', '/#projects'].map((href, i) => <Link key={href} href={href} className='nav-link' aria-current={router.pathname === '/' && hash === ['', '#about', '#projects'][i] ? 'page' : undefined}>{labels[i]}</Link>)}</div>
        <LanguageSwitcher />
        <button className='px-2 md:hidden' aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls='mobile-navigation' onClick={() => setOpen(!open)}><FontAwesomeIcon icon={open ? faXmark : faBars} /></button>
      </div>
      {open && <div id='mobile-navigation' className='flex w-full flex-col gap-2 border-t border-black/10 py-4 md:hidden'>{['/', '/#about', '/#projects'].map((href, i) => <Link key={href} href={href} onClick={() => setOpen(false)} className='nav-link' aria-current={router.pathname === '/' && hash === ['', '#about', '#projects'][i] ? 'page' : undefined}>{labels[i]}</Link>)}</div>}
    </nav>
  </header>;
}
